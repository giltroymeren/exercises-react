import axios from "axios"
import { Dispatch } from "redux"
import { ActionTypes } from "./types"

const URL = `https://jsonplaceholder.typicode.com/todos`

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IFetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: ITodo[];
}

export interface IDeleteTodosAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const deleteTodo = (id: number): IDeleteTodosAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  }
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ITodo[]>(URL)

    dispatch<IFetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    })
  }
}
