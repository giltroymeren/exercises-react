import React, { useState } from 'react';
import { connect } from 'react-redux';

import { clearVideos, getVideos } from '../actions'

interface IComponentProps {
  clearVideos: () => {}
  getVideos: (term: string) => Promise<void>
}

const SearchBar = ({
  clearVideos,
  getVideos
}: IComponentProps) => {
  const [term, setTerm] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const onClick =
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      clearVideos()
      getVideos(term)
    }

  return (
    <div className='mt-5'>
      <div className="input-group">
        <input type='text'
          placeholder='Enter what you are looking for'
          name='term'
          className='form-control form-control-lg'
          value={term}
          onChange={onChange} />
        <button className="btn btn-primary form-control-lg"
          type="submit"
          onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default connect(null, { clearVideos, getVideos })(SearchBar)
