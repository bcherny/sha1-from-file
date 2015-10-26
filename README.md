# sha1-from-file

[![Build Status][build]](https://circleci.com/gh/bcherny/sha1-from-file) [![npm]](https://www.npmjs.com/package/sha1-from-file)

[build]: https://img.shields.io/circleci/project/bcherny/sha1-from-file.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/sha1-from-file.svg?style=flat-square

generate a short sha1 hash from a file's contents

## install

```sh
npm i sha1-from-file
```

## usage

```js
import { createReadStream, readFileSync } from 'fs'
import hash from 'sha1-from-file'

// async
hash(createReadStream('./file.txt')).then(myHash => ...)

// sync
const myHash = hash.sync(readFileSync('./file.txt')) // "1bhh17h"
```