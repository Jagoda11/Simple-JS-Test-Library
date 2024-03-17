const lib = require('./../app/lib.js');
const assert = require('assert');

module.exports = function (_app) {
  // ✅ lib.mapStatusCode should return OK
  _app.tests.unit['lib.mapStatusCode should return OK'] = function (done) {
    const ok = lib.mapStatusCode(202);
    assert.strictEqual(ok, 'OK');
    done();
  };

  // ✅ lib.mapStatusCode should return MOVED
  _app.tests.unit['lib.mapStatusCode should return MOVED'] = function (done) {
    const moved = lib.mapStatusCode(311);
    assert.strictEqual(moved, 'MOVED');
    done();
  };

  // ✅ lib.mapStatusCode should return USER ERROR
  _app.tests.unit['lib.mapStatusCode should return USER ERROR'] = function (
    done
  ) {
    const val = lib.mapStatusCode(404);
    assert.strictEqual(val, 'USER ERROR');
    done();
  };

  // ✅ lib.mapStatusCode should return SERVER ERROR
  _app.tests.unit['lib.mapStatusCode should return SERVER ERROR'] = function (
    done
  ) {
    const val = lib.mapStatusCode(501);
    assert.strictEqual(val, 'SERVER ERROR');
    done();
  };

  // ✅ lib.mapStatusCode should return empty string
  _app.tests.unit['lib.mapStatusCode should return empty string '] = function (
    done
  ) {
    const val = lib.mapStatusCode('');
    assert.strictEqual(val, '');
    done();
  };
};
