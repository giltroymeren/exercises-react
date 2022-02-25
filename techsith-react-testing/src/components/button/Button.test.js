import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

import Button from './Button'

describe('Button', () => {
	const LABEL = 'Click Me!'
	afterEach(cleanup)

	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<Button />, div);
	});

	it('renders correctly', () => {
		const { getByTestId } = render(<Button label={LABEL}/>)
		expect(getByTestId('button')).toHaveTextContent(LABEL)
	});

	it('matches snapshot', () => {
		const tree = renderer.create(<Button label={LABEL} />).toJSON()
		expect(tree).toMatchSnapshot()
	})
})