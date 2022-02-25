import { Provider } from 'react-redux'
import SearchBar from './components/SearchBar';
import StockList from "./components/StockList";
import store from './context/store';

const App = () => {

  return (
    <Provider store={store}>
      <h1>Stocks App</h1>

      <SearchBar />

      <StockList />
    </Provider>
  );
}

export default App
