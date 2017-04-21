'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('Action', function () {
    it('Sum', function (done) {
        var actionExecution = new _index.ActionExecution({
            actionType: 'SUM',
            args: { a: 1, b: 2 },
            func: function func(args) {
                return args.a + args.b;
            }
        });
        (0, _ptzAssert.ok)(actionExecution.startDate, 'startDate not set');
        (0, _ptzAssert.notOk)(actionExecution.endDate, 'endDate set before execution');
        var actionStore = new _index.ActionStore();
        actionStore.successStore.subscribe(actionExecution.actionType, function (successAction) {
            (0, _ptzAssert.equal)(successAction.returnData, 3, 'execAction Return wrong value');
            (0, _ptzAssert.ok)(successAction.actionType, 'actionType not set');
            (0, _ptzAssert.ok)(successAction.args, 'args not set');
            (0, _ptzAssert.ok)(successAction.endDate, 'endDate not set');
            (0, _ptzAssert.ok)(successAction.startDate, 'startDate not set');
            (0, _ptzAssert.ok)(successAction.func, 'func not set');
            (0, _ptzAssert.notOk)(successAction.error, 'has error');
            done();
        });
        actionStore.execAction(actionExecution).then(function (returnData) {
            return (0, _ptzAssert.equal)(returnData, 3, 'execAction Return wrong value');
        });
    });
    it('Error func', function (done) {
        var error = 'expected error';
        var action = new _index.ActionExecution({
            actionType: 'ERROR_FUNC',
            args: { a: 1, b: 2 },
            func: function func(args) {
                throw Error(error);
            }
        });
        (0, _ptzAssert.ok)(action.startDate, 'startDate not set');
        (0, _ptzAssert.notOk)(action.endDate, 'endDate set before execution');
        var actionStore = new _index.ActionStore();
        actionStore.errorStore.subscribe(action.actionType, function (actionError) {
            (0, _ptzAssert.ok)(actionError.actionType, 'actionType not set');
            (0, _ptzAssert.ok)(actionError.args, 'args not set');
            (0, _ptzAssert.ok)(actionError.endDate, 'endDate not set');
            (0, _ptzAssert.ok)(actionError.startDate, 'startDate not set');
            (0, _ptzAssert.ok)(actionError.func, 'func not set');
            (0, _ptzAssert.equal)(actionError.error.message, error, 'Different error msg');
            done();
        });
        actionStore.execAction(action).catch(function (e) {
            (0, _ptzAssert.equal)(e.message, error);
        });
    });
});
//# sourceMappingURL=Action.test.js.map