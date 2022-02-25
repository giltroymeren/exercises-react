import React, { useState } from 'react';
import { SearchLocation } from './components/SearchLocation'
import { LocationsTable } from './components/LocationsTable'
import { WeatherSummary } from './components/WeatherSummary'
import { WeatherLocation } from './models/Weather'
import { searchLocation } from './services/WeatherService'
import './App.css';

function App() {
  const [ locations, setLocations ] = useState<WeatherLocation[]>([])
  const [ error, setError ] = useState('')
  const [ warning, setWarning ] = useState('')
  const [ currentLocation, setCurrentLocation ] = useState<WeatherLocation | null>(null)

  const resetAlerts = () => {
    setError('');
    setWarning('');
  }

  const addLocation = async (query: string) => {
    resetAlerts()
    const location = await searchLocation(query)

    if(!location) {
      setError(`No location found for "${query}"`)
    } else if(locations.find(item => item.id === location.id)) {
      setWarning(`Location "${query}" is already in the list.`);
    } else {
      setLocations([ location, ...locations ])
    }
  }

  return (
    <div className='container'>
      <h1>Weather App</h1>

      <SearchLocation onSearchLocation={addLocation} />
      {
        error
          ? <div className={`alert alert-danger`}>{error}</div>
          : null
      }
      {
        warning
          ? <div className={`alert alert-warning`}>{warning}</div>
          : null
      }
      <LocationsTable
        locations={locations}
        currentLocation={currentLocation}
        onSelect={location => setCurrentLocation(location)}/>

      <WeatherSummary location={currentLocation}/>
    </div>
  );
}

export default App;
