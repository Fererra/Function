'use strict';

const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  };
  // text for tests
  return key;
};

module.exports = { generateKey };
