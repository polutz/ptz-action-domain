'use strict';

var _ptzAssert = require('ptz-assert');

var _BaseStore = require('./BaseStore');

var _BaseStore2 = _interopRequireDefault(_BaseStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BaseStore', function () {
    it('Subscribe', function (done) {
        var store = new _BaseStore2.default();
        var actionType = 'SUM';
        var args = { a: 2, b: 3 };
        store.subscribe('otherAction', function (action) {
            throw Error('wrong subscriber!');
        });
        store.subscribe(actionType, function (action) {
            (0, _ptzAssert.equal)(action.actionType, actionType);
            (0, _ptzAssert.equal)(action.args, args);
            done();
        });
        store.dispatch({ actionType: actionType, args: args });
    });
    it('SubscribeAll', function (done) {
        var store = new _BaseStore2.default();
        var actionType = 'SUM';
        var args = { a: 2, b: 3 };
        store.subscribeAll(function (action) {
            (0, _ptzAssert.equal)(action.actionType, actionType);
            (0, _ptzAssert.equal)(action.args, args);
            done();
        });
        store.dispatch({ actionType: actionType, args: args });
    });
});
//# sourceMappingURL=BaseStore.test.js.map