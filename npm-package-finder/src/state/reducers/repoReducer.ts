import { ERepoActionType, TRepoAction } from "../actions"

export interface IRepoState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  data: [],
  loading: false,
  error: null
}

const reducer = (
  state: IRepoState = initialState,
  action: TRepoAction
): IRepoState => {
  switch (action.type) {
    case ERepoActionType.search:
      return {
        data: [],
        loading: true,
        error: null
      }

    case ERepoActionType.searchSuccess:
      return {
        data: action.payload,
        loading: false,
        error: null
      }

    case ERepoActionType.searchError:
      return {
        data: [],
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default reducer