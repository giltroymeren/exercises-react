import React from "react";
import { connect } from "react-redux";
import { Route, Routes, NavLink } from "react-router-dom";

import { login, logout } from '../actions'
import withRouter from "../utils/withRouter";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

class App extends React.Component {
  renderAuthButton() {
    if (this.props.auth) {
      return (
        <button onClick={this.props.logout}>
          Logout
        </button>
      )
    }

    return (
      <button onClick={this.props.login}>
        Login
      </button>
    )
  }

  renderHeader() {
    return (
      <div id="menu" className="row">
        <ul>
          <li>
            <NavLink to="/">
              <button>Home</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/post">
              <button>Comments</button>
            </NavLink>
          </li>
          <li>
            {this.renderAuthButton()}
          </li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Commenter!</h1>

        {this.renderHeader()}

        <Routes>
          <Route path='/post' element={<CommentBox />} />
          <Route exact path='/' element={<CommentList />} />
        </Routes>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, {
  login, logout
})(withRouter(App))
