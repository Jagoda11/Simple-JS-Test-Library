// generating random number
// string or not a string in palindrome
// get a number

const getNumber = function () {
  return 111;
};

const isPalindrome = function (str) {
  if (typeof str === 'string') {
    return str.split('').reverse().join('') === str;
  }
  return false;
};

const mapStatusCode = function (code) {
  if (code >= 200 && code <= 299) return 'OK';
  if (code >= 300 && code <= 399) return 'MOVED';
  if (code >= 400 && code <= 499) return 'USER ERROR';
  if (code >= 500) return 'SERVER ERROR';
  return '';
};

module.exports = { getNumber, isPalindrome, mapStatusCode };
