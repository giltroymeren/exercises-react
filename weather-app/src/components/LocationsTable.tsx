import React, { FC } from "react"
import { WeatherLocation } from '../models/Weather'

interface ILocationsTableProps {
  locations: WeatherLocation[];
  currentLocation: WeatherLocation | null;
  onSelect: (location: WeatherLocation) => void;
}

export const LocationsTable: FC<ILocationsTableProps> =
  ({locations, currentLocation, onSelect}) => {
  return (
    <div>
      <h2>Locations</h2>
      <table className='table table-hover'>
        <thead>
        <tr>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
        { locations.map((location, index) => (
          <tr className={currentLocation?.id === location.id ? 'table-primary' : ''}
              key={location.id}
              onClick={() => onSelect(location)}>
            <td>{location.name}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}