"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.Promise = function () {
    function _class(callback) {
        var _this = this;

        _classCallCheck(this, _class);

        this.resolve = function (resolve) {
            _this.isCallback(resolve, "thenCallback");
        };
        this.reject = function (reject) {
            _this.isCallback(reject, "catchCallback");
        };
        callback(this.resolve, this.reject);
    }

    _createClass(_class, [{
        key: "isCallback",
        value: function isCallback(res, keyName) {
            var _this2 = this;

            if (this[keyName]) {
                this[keyName](res);
            } else {
                setTimeout(function () {
                    _this2.isCallback(res, keyName);
                }, 30);
            }
        }
    }, {
        key: "then",
        value: function then(callback) {
            this.thenCallback = callback;
            return this;
        }
    }, {
        key: "catch",
        value: function _catch(callback) {
            this.catchCallback = callback;
            return this;
        }
    }]);

    return _class;
}();
