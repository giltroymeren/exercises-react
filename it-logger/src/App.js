import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/tech/AddTechModal';
import TechListModal from './components/tech/TechListModal';
import { Provider } from 'react-redux';
import store from './store'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <Provider store={store}>
      <SearchBar />

      <div className='container'>
        <AddButton />
        <Logs />

        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
      </div>
    </Provider>
  );
}

export default App;
