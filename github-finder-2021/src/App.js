import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import { Alert } from './components/layout/Alert';
import NavBar from './components/layout/NavBar'
import About from './components/pages/About'
import User from './components/users/User';
import GithubState from './context/github/GIthubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound'

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>

          <NavBar />

          <div className='container'>
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>

        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App