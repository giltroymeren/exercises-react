import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import SongList from './components/SongList'
import SongDetail from './components/SongDetail'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <div className='ui container grid'>
        <div className='ui row'>
          <h2>Song List</h2>
        </div>

        <div className='ui row'>
          <div className='column eight wide'>
            <SongList />
          </div>

          <div className='column eight wide'>
            <SongDetail />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
