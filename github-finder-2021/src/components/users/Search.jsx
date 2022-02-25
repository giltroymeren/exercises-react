import React, { useContext, useState } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const [inputText, setInputText] = useState('')
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const onChangeHandler = (event) =>
    setInputText(event.target.value.trim())

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (inputText === '') {
      alertContext.setAlert('Please enter something', 'light')
      return
    }

    githubContext.searchUsers(inputText)
    setInputText('')
  }

  return (
    <div>
      <form className='form' onSubmit={onSubmitHandler}>
        <input type='text'
          name='text'
          placeholder='Name of user'
          value={inputText}
          onChange={onChangeHandler} />
        <input type='submit'
          className='btn btn-dark btn-block'
          value='Search' />
        {githubContext.users.length > 0 &&
          <button className='btn btn-light btn-block'
            onClick={githubContext.clearUsers}>Clear</button>
        }
      </form>
    </div>
  )
}

export default Search
