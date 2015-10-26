'use strict'

const assert = require('assert')
const crypto = require('crypto')
const stream = require('stream')

// (s: Stream) => Promise[String]
// @throws TypeError
module.exports = function sha1FromFile (s) {

  assert(
    s instanceof stream.Readable,
    `sha1-from-file expects a stream, but was given ${ typeof s }`
  )

  let hash = crypto.createHash('sha1')

  return new Promise((resolve, reject) => {
    s.on('data', _ => hash.update(_))
     .on('end', () => resolve(formatHash(hash)))
     .on('error', reject)
  })

}

// (b: buffer|string) => String
// @throws TypeError
module.exports.sync = function sha1FromFileSync (b) {

  assert(
    b instanceof Buffer || typeof b == 'string',
    `sha1-from-file.sync expects a buffer or a string, but was given ${ typeof b }`
  )

  let hash = crypto.createHash('sha1')
  hash.update(b)
  return formatHash(hash)

}

// (hash: Hash) => String
function formatHash (hash) {
  return hash.digest('hex').slice(0, 7)
}