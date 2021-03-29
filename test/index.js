// test-runner

//dependecies
const lib = require('./../app/lib.js');
const assert = require('assert');
const mapStatusCode = require('./mapStatusCode');

//app logic for test runner
_app = {};

//container for the test
_app.tests = {
  unit: {},
};

mapStatusCode(_app);

//assert get a number is returning a number
_app.tests.unit['lib.getNumber should return number'] = function (done) {
  //when test is done running it should return : done(convention)
  const val = lib.getNumber();
  assert.strictEqual(typeof val, 'number');
  done();
};

//assert get a number is returning a number 111
_app.tests.unit['lib.getNumber should return 111'] = function (done) {
  //when test is done running it should return : done(convention)
  const val = lib.getNumber();
  assert.strictEqual(val, 111);
  done();
};

_app.tests.unit[
  'lib.isPalindrome should return true when the input is a palindrome'
] = function (done) {
  //when test is done running it should return : done(convention)
  const palindrome = lib.isPalindrome('mom');
  assert.strictEqual(palindrome, true);
  done();
};

_app.tests.unit[
  'lib.isPalindrome should return false when the input is not a palindrome'
] = function (done) {
  //when test is done running it should return : done(convention)
  const palindrome = lib.isPalindrome('test');
  assert.strictEqual(palindrome, false);
  done();
};

_app.tests.unit[
  'lib.isPalindrome should return false when the input is undefined'
] = function (done) {
  //when test is done running it should return : done(convention)
  const palindrome = lib.isPalindrome(undefined);
  assert.strictEqual(palindrome, false);
  done();
};

_app.tests.unit[
  'lib.isPalindrome should return false when the input is not a string'
] = function (done) {
  //when test is done running it should return : done(convention)
  const palindrome = lib.isPalindrome(66);
  assert.strictEqual(palindrome, false);
  done();
};

// Count all the tests
_app.countTests = function () {
  let counter = 0;
  for (const key in _app.tests) {
    if (_app.tests.hasOwnProperty(key)) {
      const subTests = _app.tests[key];
      for (const testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          counter++;
        }
      }
    }
  }
  return counter;
};

//run all the tests, collecting the errors and successes
_app.runTests = function () {
  const errors = [];
  let successes = 0;
  const limit = _app.countTests();
  let counter = 0;
  for (const key in _app.tests) {
    if (_app.tests.hasOwnProperty(key)) {
      const subTests = _app.tests[key];
      for (const testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          (function () {
            const tempTestName = testName;
            const testValue = subTests[testName];
            // call the test

            try {
              testValue(function () {
                //if it calls back : without throwing : it succeeded
                console.log('\x1b[32m%s\x1b[0m', tempTestName);
                counter++;
                successes++;
                if (counter == limit) {
                  _app.produceTestReport(limit, successes, errors);
                }
              });
            } catch (e) {
              errors.push({
                name: testName,
                error: e,
              });
              console.log('\x1b[31m%s\x1b[0m', tempTestName);
              counter++;
              if (counter == limit) {
                _app.produceTestReport(limit, successes, errors);
              }
            }
          })();
        }
      }
    }
  }
};

// Product a test outcome report
_app.produceTestReport = function (limit, successes, errors) {
  console.log('');
  console.log('--------BEGIN TEST REPORT--------');
  console.log('');
  console.log('Total Tests: ', limit);
  console.log('Pass: ', successes);
  console.log('Fail: ', errors.length);
  console.log('');

  // If there are errors, print them in detail
  if (errors.length > 0) {
    console.log('--------BEGIN ERROR DETAILS--------');
    console.log('');
    errors.forEach(function (testError) {
      console.log('\x1b[31m%s\x1b[0m', testError.name);
      console.log(testError.error);
      console.log('');
    });
    console.log('');
    console.log('--------END ERROR DETAILS--------');
  }

  console.log('');
  console.log('--------END TEST REPORT--------');
};

// Run the tests
_app.runTests();
