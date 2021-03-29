const lib = require('./../app/lib.js');
const assert = require('assert');

module.exports = function (_app) {
  _app.tests.unit['lib.mapStatusCode should return OK'] = function (done) {
    //when test is done running it should return : done(convention)
    const ok = lib.mapStatusCode(202);
    assert.strictEqual(ok, 'OK');
    done();
  };

  _app.tests.unit['lib.mapStatusCode should return MOVED'] = function (done) {
    //when test is done running it should return : done(convention)
    const moved = lib.mapStatusCode(311);
    assert.strictEqual(moved, 'MOVED');
    done();
  };

  _app.tests.unit['lib.mapStatusCode should return USER ERROR'] = function (
    done
  ) {
    //when test is done running it should return : done(convention)
    const val = lib.mapStatusCode(404);
    assert.strictEqual(val, 'USER ERROR');
    done();
  };

  _app.tests.unit['lib.mapStatusCode should return SERVER ERROR'] = function (
    done
  ) {
    //when test is done running it should return : done(convention)
    const val = lib.mapStatusCode(501);
    assert.strictEqual(val, 'SERVER ERROR');
    done();
  };

  _app.tests.unit['lib.mapStatusCode should return empty string '] = function (
    done
  ) {
    //when test is done running it should return : done(convention)
    const val = lib.mapStatusCode('');
    assert.strictEqual(val, '');
    done();
  };
};
