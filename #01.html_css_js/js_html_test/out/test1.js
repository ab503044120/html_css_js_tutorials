'use strict';

var _test = require('./test2.js');

var i = 0;
i = _test.i;
window.i = i;
console.log(i);