
# @awesome-tools/eslint-config

# Eslint config for my personal projects. Feel free to use this package


[![CI](https://github.com/basantech89/eslint-config/actions/workflows/main.yml/badge.svg)](https://github.com/basantech89/eslint-config/actions/workflows/main.yml)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Code of Conduct](https://img.shields.io/badge/code-of%20conduct-green.svg)](https://publiclab.org/conduct)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Things to know](#Things to know)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [LICENSE](#license)

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev @awesome-tools/eslint-config
```

## Usage

Then add the extends to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: '@awesome-tools/eslint-config',
  rules: {
    // your overrides
  },
}
```

You can import prettier config as well
```javascript
const base = require('eslint-config-storybook/prettier.config')

module.exports = {
  ...base,
  arrowParens: 'avoid',
  overrides: [
      // your overrides
  ]
}

```

### Things to know

- All plugins needed for rules used by these configs are dependencies of this
  module so you don't have to install anything on your own.
- The default config actually is composed of several configurations, and you can
  use those individually. You can use each of these configs yourself if you want
  to leave my own personal style out of it.

## Issues

_Looking to contribute? Look for the [Good First Issue](https://github.com/basantech89/eslint-config/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**](https://github.com/basantech89/eslint-config/issues)

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.


## LICENSE

ISC
