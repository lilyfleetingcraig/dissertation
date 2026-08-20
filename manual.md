# Installation

## Prerequisites

- npm

Configuring this system is as simple as running the command from the Source Code directory:
`npm install`

# Testing

Unit testing is implemented using vitest - the test suite can be ran with:
`npm run test`

Code coverage can be seen with:
``

The coverage report can be accessed with:
`start coverage/lcov-report/index.html`

## Build Quality

### Linting

Linting is performed with eslint - this can be ran using the command:
`npm run lint`

Issues discovered can be fixed with:
`npm run lint:fix`

### Code Style

Adherence to style conventions is checked using prettier - this can be ran with:
`npm run format:check`

Discovered issues can be corrected using:
`npm run format`

### Typing

TypeScript typing can be checked using the command:
`npm run typecheck`