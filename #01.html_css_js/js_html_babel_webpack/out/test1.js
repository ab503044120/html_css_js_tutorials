'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { i as i1 } from './test2.js'

var Test1 = function () {
    function Test1(dom) {
        _classCallCheck(this, Test1);

        this.dom = dom;
    }

    _createClass(Test1, [{
        key: 'writeDom',
        value: function writeDom() {
            dom.write('我是来自test1');
        }
    }]);

    return Test1;
}();

// let i = 0;
// i = i1;
// window.i = i;
// console.log(i);