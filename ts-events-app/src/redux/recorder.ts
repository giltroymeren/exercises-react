import { Action } from "redux";
import { TRootState } from "./store";

interface IRecorderState {
  dateStart: string
}

enum ERecorderActionTypes {
  'start',
  'stop'
}

type TStartAction = Action<typeof ERecorderActionTypes.start>
type TStopAction = Action<typeof ERecorderActionTypes.stop>

export const start = (): TStartAction => ({
  type: ERecorderActionTypes.start
})

export const stop = (): TStopAction => ({
  type: ERecorderActionTypes.stop
})

export const selectRecorderState = (rootState: TRootState) =>
  rootState.recorder

export const selectDateStart = (rootState: TRootState) =>
  selectRecorderState(rootState).dateStart

const initialState: IRecorderState = {
  dateStart: ''
}

const recorderReducer = (
  state: IRecorderState = initialState,
  action: TStartAction | TStopAction
) => {
  switch (action.type) {
    case ERecorderActionTypes.start:
      return { ...state, dateStart: new Date().toISOString() }

    case ERecorderActionTypes.stop:
      return { ...state, dateStart: '' }

    default:
      return state;
  }
}

export default recorderReducer