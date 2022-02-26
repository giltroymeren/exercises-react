import { ThunkAction } from "redux-thunk";
import { selectDateStart } from "./recorder";
import { TRootState } from "./store";
import {
  EUserEventsActionTypes,
  IUserEvent,
  IUserEventsState,
  TActionTypes
} from "./userEventsTypes";

const SERVER_ADDRESS = 'http://localhost:3001/events'

export const loadUserEvents = (): ThunkAction<
  void,
  TRootState,
  undefined,
  TActionTypes
> => async (dispatch) => {
  dispatch({
    type: EUserEventsActionTypes.loadRequest
  })

  try {
    const response = await fetch(SERVER_ADDRESS)
    const events: IUserEvent[] = await response.json()

    dispatch({
      type: EUserEventsActionTypes.loadSuccess,
      payload: events
    })
  } catch (error) {
    dispatch({
      type: EUserEventsActionTypes.loadFailure,
      payload: 'Failed to load events'
    })
  }
}

export const deleteUserEvent = (id: IUserEvent['id']): ThunkAction<
  Promise<void>,
  TRootState,
  undefined,
  TActionTypes
> => async (dispatch, getState) => {
  dispatch({
    type: EUserEventsActionTypes.deleteRequest
  })

  try {
    const response = await fetch(`${SERVER_ADDRESS}/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      dispatch({
        type: EUserEventsActionTypes.deleteSuccess,
        payload: id
      })
    }
  } catch (error) {
    dispatch({
      type: EUserEventsActionTypes.deleteFailure,
      payload: 'Failed to delete event'
    })
  }
}

export const createUserEvent = (): ThunkAction<
  Promise<void>,
  TRootState,
  undefined,
  TActionTypes
> => async (dispatch, getState) => {
  dispatch({
    type: EUserEventsActionTypes.createRequest
  })

  try {
    const dateStart = selectDateStart(getState())
    const event: Omit<IUserEvent, 'id'> = {
      title: "Default",
      dateStart,
      dateEnd: new Date().toISOString()
    }

    const response = await fetch(SERVER_ADDRESS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    })

    const createdEvent: IUserEvent = await response.json()

    dispatch({
      type: EUserEventsActionTypes.createSuccess,
      payload: createdEvent
    })
  } catch (error) {
    dispatch({
      type: EUserEventsActionTypes.createFailure,
      payload: 'Failed to create event'
    })
  }
}

const selectUserEventsState = (rootState: TRootState) =>
  rootState.userEvents

export const selectUserEventsArray = (rootState: TRootState) => {
  const state = selectUserEventsState(rootState)
  return state.allIDs.map(id => state.byIDs[id])
}

const initialState: IUserEventsState = {
  byIDs: {},
  allIDs: []
}

const userEventsReducer = (
  state: IUserEventsState = initialState,
  action: TActionTypes
) => {
  switch (action.type) {
    case EUserEventsActionTypes.createSuccess:
      const event = action.payload
      return {
        ...state,
        addIDs: [...state.allIDs, event.id],
        byIDs: { ...state.byIDs, [event.id]: event }
      }

    case EUserEventsActionTypes.deleteSuccess:
      const idToDelete = action.payload
      const newState = {
        ...state,
        byIDs: { ...state.byIDs },
        allIDs: state.allIDs.filter(id => id !== idToDelete)
      }

      delete newState.byIDs[idToDelete]
      return newState

    case EUserEventsActionTypes.loadSuccess:
      const events = action.payload
      return {
        ...state,
        allIDs: events.map(item => item.id),
        byIDs: events.reduce<IUserEventsState['byIDs']>((byIDs, event) => {
          byIDs[event.id] = event
          return byIDs
        }, {})
      }

    default: return state
  }
}

export default userEventsReducer