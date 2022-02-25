import { Provider } from "react-redux";
import { store } from './state'
import RepoList from './components/RepoList'

const App = () => {
  return (
    <Provider store={store}>
      <h1>NPM Package Finder</h1>

      <RepoList />
    </Provider>
  );
}
 
export default App;
