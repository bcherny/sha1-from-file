"use strict";
var assert = require("assert");
var crypto_1 = require("crypto");
var stream_1 = require("stream");
function sha1FromFile(s) {
    assert(s instanceof stream_1.Readable, "sha1-from-file expects a stream, but was given " + typeof s);
    var hash = crypto_1.createHash('sha1');
    return new Promise(function (resolve, reject) {
        s.on('data', function (_) { return hash.update(_); })
            .on('end', function () { return resolve(formatHash(hash)); })
            .on('error', reject);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sha1FromFile;
function sync(b) {
    assert(b instanceof Buffer || typeof b === 'string', "sha1-from-file.sync expects a buffer or a string, but was given " + typeof b);
    var hash = crypto_1.createHash('sha1');
    hash.update(b);
    return formatHash(hash);
}
exports.sync = sync;
function formatHash(hash) {
    return hash.digest('hex').slice(0, 7);
}
//# sourceMappingURL=index.js.map