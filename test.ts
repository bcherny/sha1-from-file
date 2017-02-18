import { createReadStream, readFileSync } from 'fs'
import hash, { sync } from './'
import { Readable } from 'stream'
import { AssertionError } from 'assert'
import test from 'ava'

test(`async: it should resolve to given stream's hash`, async t => {

  t.plan(1)

  try {
    const h = await hash(createReadStream('./.gitignore', { autoClose: true, encoding: 'utf8', flags: 'r' }))
    t.is(h, '64c52a5')
  } catch (err) {
    t.fail(err)
  }

})

test(`async: it should resolve to an error if the given stream errors out`, async t => {

  t.plan(1)
  const s = new Readable

  try {
    await hash(s)
    t.fail()
  } catch (err) {
    t.pass()
  }

  s.emit('error', new Error)

})

test(`async: it should throw an AssertionError when passed a non-stream`, t => {

  [42, 'foo', new Buffer(1), [], {}, () => { }].forEach(_ => {
    t.throws(() => hash(_ as any), AssertionError)
  })

})

test(`sync: it should return the given buffer's hash`, t => {

  const h = sync(readFileSync('./.gitignore'))
  t.is(h, '64c52a5')

})

test(`sync: it should return the given string's hash`, t => {

  const h = sync(readFileSync('./.gitignore').toString())
  t.is(h, '64c52a5')

})

test(`sync: it should throw an AssertionError when passed a non-buffer and non-string`, t => {

  [42, [], {}, () => { }].forEach(_ => {
    t.throws(() => sync(_ as any), AssertionError)
  })

})
