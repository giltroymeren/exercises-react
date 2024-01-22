# MyCustomers

A simple web application to manage simple customer data.
It shows a table of customers that can be created, updated, deleted and viewed for more details.

## Table of Contents
- [MyCustomers](#mycustomers)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
    - [Features](#features)
    - [Technical stack](#technical-stack)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Testing](#testing)
  - [Running the app](#running-the-app)
    - [Quick start](#quick-start)
    - [Commands](#commands)
      - [`npm start`](#npm-start)
      - [`npm run test`](#npm-run-test)
      - [`npm run cypress:test`](#npm-run-cypresstest)
  - [Tests](#tests)
    - [Unit tests](#unit-tests)
    - [E2E tests](#e2e-tests)
  - [Author](#author)
  - [License](#license)

## About 

### Features

The application has two major pages: the home page and customer profile.

In the home page, users can see all customers' name, email, phone number and affiliated company in a table.
These can be updated, deleted or viewed to go to the customer profile page.

The customer profile page serves to show all the other important details about the customer. The update and delete features are also available in this page.

### Technical stack

_MyCustomers_ was built and uses the following libraries and applications: 

#### Frontend
- [ReactJS](https://react.dev) for the UI management and to take advantage of its powerful single-page application capabilities.
- [TypeScript](https://www.typescriptlang.org/) to strictly enforce the type safety in the codebase.
- [Ant Design](https://ant.design/) provides the design library for look and feel of the application.
- [zustand](https://github.com/pmndrs/zustand) as the simple and intuitive state management tool for the entire application.
- [react-query](https://tanstack.com/query/v3/) as the asynchronous API library for connecting to the backend.

#### Backend
- [Apidog](https://apidog.com/) is an online customisable development platform for  APIs and provides the initial data to the application.

#### Testing
- [Jest](https://jestjs.io/) testing framework to work with React Testing Library.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for simple unit tests of simple parts of the codebase.
- [Cypress](https://www.cypress.io/) to create complex and easy-to-setup end-to-end and component tests for the application's features.
 
## Running the app

This application requires both [Node.js](https://nodejs.org/en) and a modern browser (such as [Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/en-US/firefox/new/)) installed in your system in order to run in together with the files in the `mycustomers` folder.

### Quick start

1. Unzip the `mycustomer.zip` file. It should produce a folder of the same name.
2. Open your system's terminal application and go to the location of `mycustomers` folder.
3. Go inside the `mycustomer` folder.
4. Run the command `npm install` to install all the dependencies in the `node_modules` folder.
5. Next, run `npm start` to start the application.
6. Open your browser and go to `http://localhost:4000/`.
7. Enjoy using _MyCustomers_!

> The application will be preloaded with five to nine fake customer data c/o Apidog for immediate showcase.

### Commands

These are available to run in the terminal inside the `mycustomers` folder and corresponds to the `scripts` stated in the `package.json` file.

#### `npm start`

This command starts the application.

#### `npm run test`

This command starts the Jest and RTL tests and shows the results in the command line.

#### `npm run cypress:test`

This command opens the Cypress testing UI and requires that the application is also running. Only E2E test cases are available.

Please visit the [official documentation](https://docs.cypress.io/guides/getting-started/opening-the-app) for more details on how to use the UI.

## Tests

The application has unit and end-to-end tests built with Jest/RTL and Cypress.

### Unit tests

There is a test for zustand store methods. 

Please visit `src/stores/__tests__/customers.test.ts` to see the test cases and `npm run test` to see the results.

### E2E tests

All E2E tests are found in the `cypress/e2e` folder.

- Smoke test - goes over lightly checking the major functions of the landing page and can be found in `cypress/e2e/smoke.cy.ts`
- Feature tests - includes five test suites for the five features: create, update, delete, view and view all with their own respective files in `cypress/e2e/customer`.

## Author

[Troy Meren](https://giltroymeren.github.io/)

## License
Copyright (c) 2024 Troy Meren
Licensed under the [MIT license](LICENSE).