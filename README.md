# Vitest / React act

This reproduces an issue where `act` react-testing-library doesn't suppress act warnings when using vitest.

## Get started

- Clone the repo
- Run `npm install`
- Run `npm run vitest`

This will run the tests with vitest and you will see an act warning.
The test being run is in `src/reproduction.test.jsx`.

You can also run `npm run jest` to see what the output looks like using jest.
There are no act warnings when running with jest.
(You may need to press `a` to have jest run all the tests)

## Works with React 17

If you run the following, the tests will run in vitest with no act warning.

```
npm install react@17 react-dom@17 @testing-library/react@12
npm run vitest
```
