# egg-sequelize-multitable

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-sequelize-multitable.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-sequelize-multitable
[travis-image]: https://img.shields.io/travis/eggjs/egg-sequelize-multitable.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-sequelize-multitable
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-sequelize-multitable.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-sequelize-multitable?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-sequelize-multitable.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-sequelize-multitable
[snyk-image]: https://snyk.io/test/npm/egg-sequelize-multitable/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-sequelize-multitable
[download-image]: https://img.shields.io/npm/dm/egg-sequelize-multitable.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-sequelize-multitable

<!--
Description here.
-->

## Install

```bash
$ npm i egg-sequelize-multitable --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.sequelizeMultitable = {
  enable: true,
  package: 'egg-sequelize-multitable',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.sequelize = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
