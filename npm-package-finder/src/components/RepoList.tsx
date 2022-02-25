import React, { useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const RepoList = () => {
  const [term, setTerm] = useState('')
  const { searchRepos } = useActions()
  const { data, error, loading } = useTypedSelector(state => state.repositories)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    searchRepos(term)
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="term"
        onChange={e => setTerm(e.target.value)} />
      <button>Search</button>

      {error && <h3>Error occurred!</h3>}

      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <ul>
          {data.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}
    </form>
  )
}

export default RepoList
