import * as assert from 'assert'
import { createHash, Hash } from 'crypto'
import { Readable } from 'stream'

export default function sha1FromFile(s: Readable): Promise<string> {

  assert(
    s instanceof Readable,
    `sha1-from-file expects a stream, but was given ${ typeof s }`
  )

  let hash = createHash('sha1')

  return new Promise((resolve, reject) => {
    s.on('data', _ => hash.update(_))
     .on('end', () => resolve(formatHash(hash)))
     .on('error', reject)
  })

}

export function sync(b: Buffer | string): string {

  assert(
    b instanceof Buffer || typeof b === 'string',
    `sha1-from-file.sync expects a buffer or a string, but was given ${ typeof b }`
  )

  let hash = createHash('sha1')
  hash.update(b)
  return formatHash(hash)

}

function formatHash(hash: Hash): string {
  return hash.digest('hex').slice(0, 7)
}
