import {
  ITodo,
  ActionTypes,
  IAction
} from "../actions";

export const todosReducer = (
  state: ITodo[] = [],
  action: IAction
) => {
  switch (action.type) {
    case ActionTypes.deleteTodo:
      return state.filter((todo: ITodo) => todo.id !== action.payload)
    case ActionTypes.fetchTodos:
      return action.payload
    default:
      return state
  }
}