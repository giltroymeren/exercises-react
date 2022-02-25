import { IDeleteTodosAction, IFetchTodosAction } from "./todos";

export enum ActionTypes {
  deleteTodo,
  fetchTodos,
}

export type IAction = IDeleteTodosAction | IFetchTodosAction