import { combineReducers } from "redux";
import { ITodo } from "../actions";
import { todosReducer } from './todos'

export interface IStoreState {
  todos: ITodo[]
}

export const reducers = combineReducers<IStoreState>({
  todos: todosReducer
})