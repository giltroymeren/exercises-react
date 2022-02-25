import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { searchLogs } from '../../actions/logActions'
import PropTypes from 'prop-types'

const SearchBar = ({ searchLogs }) => {
  const query = useRef('')

  const onChangeHandler = (event) => {
    searchLogs(event.target.value)
  }

  return (
    <nav
      className='blue'
      style={{ marginBottom: '2em' }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search"
              type="search"
              placeholder='What are you looking for?'
              ref={query}
              onChange={onChangeHandler} />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
}

export default connect(null, {
  searchLogs
})(SearchBar)
