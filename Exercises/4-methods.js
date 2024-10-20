'use strict';

let iface = {
  m1: (x) => [x],
  m2: function (x, y) {
      return [x, y];
  },
  m3(x, y, z) {
      return [x, y, z];
  }
};

const methods = iface => {
  // Introspect all properties of iface object and
  // extract function names and number of arguments
  // For example: {
  //   m1: (x) => [x],
  //   m2: function (x, y) {
  //     return [x, y];
  //   },
  //   m3(x, y, z) {
  //     return [x, y, z];
  //   }
  // will return: [
  //   ['m1', 1],
  //   ['m2', 2],
  //   ['m3', 3]
  // ]

  const names = [];
  for (const name in iface) {
    const func = iface[name];
    if (typeof func === 'function') {
      names.push([name, func.length])
    }
  }

  return names;
};

module.exports = { methods };
