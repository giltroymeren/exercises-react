import React from 'react'
import CustomerCreate from './CustomerCreate'

describe('<CustomerCreate />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CustomerCreate />)
  })
})