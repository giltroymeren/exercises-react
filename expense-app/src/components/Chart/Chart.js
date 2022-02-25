import React, { useState } from 'react'

import ChartBar from './ChartBar'

import './Chart.css'

function Chart(props) {
	const values = props.dataPoints.map(data => data.value)
	const max = Math.max(...values)

	return (
		<div className="chart">
			{props.dataPoints.map(dataPoint => {
				return <ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					label={dataPoint.label}
					maxValue={max}/>
			})}
		</div>
	)
}

export default Chart