import { BrowserRouter, Route } from 'react-router-dom'

import Header from './layout/Header'
import StreamList from './components/StreamList'
import StreamCreate from './components/StreamCreate'
import StreamEdit from './components/StreamEdit'
import StreamDelete from './components/StreamDelete'
import StreamShow from './components/StreamShow'

function App() {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />

        <div className="ui segment">
          <Route exact path='/' component={StreamList} />
          <Route exact path='/streams/new' component={StreamCreate} />
          <Route exact path='/streams/edit' component={StreamEdit} />
          <Route exact path='/streams/delete' component={StreamDelete} />
          <Route exact path='/streams/show' component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
