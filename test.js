"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var fs_1 = require("fs");
var _1 = require("./");
var stream_1 = require("stream");
var assert_1 = require("assert");
var ava_1 = require("ava");
ava_1.default("async: it should resolve to given stream's hash", function (t) { return __awaiter(_this, void 0, void 0, function () {
    var h, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                t.plan(1);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, _1.default(fs_1.createReadStream('./.gitignore', { autoClose: true, encoding: 'utf8', flags: 'r' }))];
            case 2:
                h = _a.sent();
                t.is(h, '64c52a5');
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                t.fail(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
ava_1.default("async: it should resolve to an error if the given stream errors out", function (t) { return __awaiter(_this, void 0, void 0, function () {
    var s, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                t.plan(1);
                s = new stream_1.Readable;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, _1.default(s)];
            case 2:
                _a.sent();
                t.fail();
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                t.pass();
                return [3 /*break*/, 4];
            case 4:
                s.emit('error', new Error);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default("async: it should throw an AssertionError when passed a non-stream", function (t) {
    [42, 'foo', new Buffer(1), [], {}, function () { }].forEach(function (_) {
        t.throws(function () { return _1.default(_); }, assert_1.AssertionError);
    });
});
ava_1.default("sync: it should return the given buffer's hash", function (t) {
    var h = _1.sync(fs_1.readFileSync('./.gitignore'));
    t.is(h, '64c52a5');
});
ava_1.default("sync: it should return the given string's hash", function (t) {
    var h = _1.sync(fs_1.readFileSync('./.gitignore').toString());
    t.is(h, '64c52a5');
});
ava_1.default("sync: it should throw an AssertionError when passed a non-buffer and non-string", function (t) {
    [42, [], {}, function () { }].forEach(function (_) {
        t.throws(function () { return _1.sync(_); }, assert_1.AssertionError);
    });
});
//# sourceMappingURL=test.js.map