'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseStore = function () {
    function BaseStore() {
        _classCallCheck(this, BaseStore);

        this.typeSubscribers = {};
        this.subscribers = [];
    }

    _createClass(BaseStore, [{
        key: 'subscribe',
        value: function subscribe(type, func) {
            if (this.typeSubscribers[type] == null) this.typeSubscribers[type] = [func];else this.typeSubscribers[type].push(func);
        }
    }, {
        key: 'subscribeAll',
        value: function subscribeAll(func) {
            this.subscribers.push(func);
        }
    }, {
        key: 'dispatch',
        value: function dispatch(action) {
            console.log('this.subscribers', this.subscribers);
            this.subscribers.forEach(function (func) {
                return func(action);
            });
            console.log('this.typeSubscribers', this.typeSubscribers);
            if (this.typeSubscribers[action.actionType]) this.typeSubscribers[action.actionType].forEach(function (func) {
                return func(action);
            });
        }
    }]);

    return BaseStore;
}();
//# sourceMappingURL=BaseStore.js.map


exports.default = BaseStore;
//# sourceMappingURL=BaseStore.js.map