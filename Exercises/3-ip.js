'use strict';

// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with bitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
// Use Array.prototype.reduce of for loop

const ipToInt = (ip = '127.0.0.1') => {

  return ip.split('.')
           .map(Number)
           .reduce((acc, current) => (acc << 8) + current, 0);
};

module.exports = { ipToInt };
