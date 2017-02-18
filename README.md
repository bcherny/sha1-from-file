# sha1-from-file

[![Build Status][build]](https://circleci.com/gh/bcherny/sha1-from-file) [![npm]](https://www.npmjs.com/package/sha1-from-file)

[build]: https://img.shields.io/circleci/project/bcherny/sha1-from-file.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/sha1-from-file.svg?style=flat-square

generate a short sha1 hash from a file's contents

## install

```sh
npm install sha1-from-file --save
```

## usage

```js
import { createReadStream, readFileSync } from 'fs'
import hash, { sync } from 'sha1-from-file'

// async (ES6-)
hash(createReadStream('./file.txt')).then(myHash => ...)

// async (ES7)
const myHash = await hash(createReadStream('./file.txt'))

// sync (buffer)
const myHash = sync(new Buffer(...))

// sync (string)
const myHash = sync(readFileSync('./file.txt', 'utf-8')) // "1bhh17h"
```