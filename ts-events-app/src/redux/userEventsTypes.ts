import { Action } from "redux";

export interface IUserEvent {
  id: number;
  title: string;
  dateStart: string;
  dateEnd: string;
}

export interface IUserEventsState {
  byIDs: Record<IUserEvent['id'], IUserEvent>
  allIDs: IUserEvent['id'][]
}

export enum EUserEventsActionTypes {
  'createRequest',
  'createSuccess',
  'createFailure',
  'deleteRequest',
  'deleteSuccess',
  'deleteFailure',
  'loadRequest',
  'loadSuccess',
  'loadFailure'
}

export interface ICreateRequestAction extends
  Action<typeof EUserEventsActionTypes.createRequest> { }
export interface ICreateSuccessAction extends
  Action<typeof EUserEventsActionTypes.createSuccess> {
  payload: IUserEvent
}
export interface ICreateFailureAction extends
  Action<typeof EUserEventsActionTypes.createFailure> {
  payload: string
}

export interface IDeleteRequestAction extends
  Action<typeof EUserEventsActionTypes.deleteRequest> { }
export interface IDeleteSuccessAction extends
  Action<typeof EUserEventsActionTypes.deleteSuccess> {
  payload: IUserEvent['id']
}
export interface IDeleteFailureAction extends
  Action<typeof EUserEventsActionTypes.deleteFailure> {
  payload: string
}

export interface ILoadRequestAction extends
  Action<typeof EUserEventsActionTypes.loadRequest> { }
export interface ILoadSuccessAction extends
  Action<typeof EUserEventsActionTypes.loadSuccess> {
  payload: IUserEvent[]
}
export interface ILoadFailureAction extends
  Action<typeof EUserEventsActionTypes.loadFailure> {
  payload: string
}

export type TActionTypes = ICreateRequestAction
  | ICreateSuccessAction
  | ICreateFailureAction
  | IDeleteRequestAction
  | IDeleteSuccessAction
  | IDeleteFailureAction
  | ILoadRequestAction
  | ILoadSuccessAction
  | ILoadFailureAction;