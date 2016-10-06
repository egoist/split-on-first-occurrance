# split-on-first-occurrence

[![NPM version](https://img.shields.io/npm/v/split-on-first-occurrence.svg?style=flat-square)](https://npmjs.com/package/split-on-first-occurrence) [![NPM downloads](https://img.shields.io/npm/dm/split-on-first-occurrence.svg?style=flat-square)](https://npmjs.com/package/split-on-first-occurrence) [![Build Status](https://img.shields.io/circleci/project/egoist/split-on-first-occurrence/master.svg?style=flat-square)](https://circleci.com/gh/egoist/split-on-first-occurrence)

## Install

```bash
$ npm install --save split-on-first-occurrence
```

## Usage

```js
const split = require('split-on-first-occurrence')

split('Author: EGOIST COOL', ' ')
//=> ['Author:', 'EGOIST COOL']

// split by a string
split('Hello\n\nWorld\n\n!', '\n\n')
//=> ['Hello', 'World\n\n!']
```

## API

### split(input, char)

#### input

Type: `string`

The string to split.

#### char

Type: `string`  

The seperator char or chars.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
