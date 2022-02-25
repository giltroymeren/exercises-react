import React, { FC, useState } from "react"

interface ISearchLocationProps {
  onSearchLocation: (search: string) => void,
}

export const SearchLocation: FC<ISearchLocationProps> =
  ({onSearchLocation}) => {
  const [ searchLocation, setSearchLocation ] = useState('')
  const disableSearch = searchLocation.trim() === ''

  const addLocation = () => {
    onSearchLocation(searchLocation)
    setSearchLocation('')
  }

  const onSearchLocationChange = (event: any) => {
    setSearchLocation(event.target.value)
  }

  const onSearchLocationKeyUp = (event:any) => {
    if(event.keyCode === 13) addLocation()
  }

  return (
    <div>
      <label>
        Add Location
        <input
          className='m-1 mr-1'
          type="text"
          placeholder="Enter the city"
          value={searchLocation}
          onChange={onSearchLocationChange}
          onKeyUp={onSearchLocationKeyUp}
          />
      </label>
      <button
        className='btn btn-primary'
        onClick={addLocation}
        disabled={disableSearch}>
        Search
      </button>
  </div>
  )
}