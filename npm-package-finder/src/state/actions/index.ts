export interface IRepoSearchAction {
  type: ERepoActionType.search;
}

export interface IRepoSearchSuccessAction {
  type: ERepoActionType.searchSuccess;
  payload: string[];
}

export interface IRepoSearchErrorAction {
  type: ERepoActionType.searchError;
  payload: string;
}

export type TRepoAction = IRepoSearchAction
  | IRepoSearchSuccessAction
  | IRepoSearchErrorAction

export enum ERepoActionType {
  'search',
  'searchSuccess',
  'searchError'
}