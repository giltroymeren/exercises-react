import React from "react"
import { connect } from "react-redux"
import { ITodo, deleteTodo, fetchTodos } from "../actions"
import { IStoreState } from "../reducers"

interface IAppProps {
  todos: ITodo[];
  deleteTodo: typeof deleteTodo;
  fetchTodos: Function;
}

interface IAppState {
  loading: boolean
}

class _App extends React.Component<IAppProps, IAppState> {
  state = { loading: false }

  componentDidUpdate(prevProps: IAppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ loading: false })
    }
  }

  onClick = (): void => {
    this.props.fetchTodos()
    this.setState({ loading: true })
  }

  onDelete = (id: number): void => {
    this.props.deleteTodo(id)
  }

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: ITodo) => (
      <div key={todo.id}>
        {todo.title}{' '}<button onClick={() => this.onDelete(todo.id)}>Delete</button>
      </div>))
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Fetch</button>
        {this.state.loading ? <h3>Loading data...</h3> : (
          this.renderList()
        )}
      </div>
    )
  }
}

const mapStateToProps = (state: IStoreState): { todos: ITodo[] } => {
  return {
    todos: state.todos
  }
}

export const App = connect(
  mapStateToProps,
  { deleteTodo, fetchTodos }
)(_App)