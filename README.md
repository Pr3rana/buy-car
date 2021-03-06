# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Working with react-testing-library with jest for unit testing

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Working with Cypress for end to end testing

### `npm run cypress`

Run the above command to open Cypress, You should have a list of tests open. Go there and select `init.spec.js`. That should cause the test to run and pop up a screen that shows the test passing.

- Or Run the following command in your project

```bash
$ npx cypress run --spec "cypress/integration/init.spec.js"
```

## Bonus

1. Integrated the feature to add/remove cars from wishlist using local storage
2. Used pure components
3. Used hooks and ES-6