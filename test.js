const fs = require('fs')
const hash = require('./index')
const stream = require('stream')
const AssertionError = require('assert').AssertionError

module.exports = {

  async: {

    'it should resolve to given stream\'s hash': function (test) {

      test.expect(1)

      hash(fs.createReadStream('./.gitignore', { autoClose: true, encoding: 'utf8', flags: 'r' })).then(h => {
        test.equal(h, 'cf4e2dc')
        test.done()
      }, err => {
        test.fail()
        test.done()
      })

    },

    'it should resolve to an error if the given stream errors out': function (test) {

      test.expect(1)
      const s = new stream.Readable

      hash(s).then(h => {
        test.fail()
        test.done()
      }, err => {
        test.ok(true)
        test.done()
      })

      s.emit('error', new Error)

    },
    
    'it should throw an AssertionError when passed a non-stream': function (test) {

      [42, 'foo', new Buffer(1), [], {}, ()=>{}].forEach(_ => {
        test.throws(() => hash(_), AssertionError)
      })
      test.done()

    }

  },

  sync: {
    
    'it should return the given buffer\'s hash': function (test) {

      const h = hash.sync(fs.readFileSync('./.gitignore'))
      test.equal(h, 'cf4e2dc')
      test.done()

    },
    
    'it should return the given string\'s hash': function (test) {

      const h = hash.sync(fs.readFileSync('./.gitignore').toString())
      test.equal(h, 'cf4e2dc')
      test.done()

    },
    
    'it should throw an AssertionError when passed a non-buffer and non-string': function (test) {

      [42, [], {}, ()=>{}].forEach(_ => {
        test.throws(() => hash.sync(_), AssertionError)
      })
      test.done()

    }

  }

}