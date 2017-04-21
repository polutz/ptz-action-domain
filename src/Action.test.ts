import { equal, notOk, ok, throws } from 'ptz-assert';
import { ActionExecution, ActionStore } from './index';

describe('Action', () => {
    it('Sum', (done) => {
        const actionExecution = new ActionExecution({
            actionType: 'SUM',
            args: { a: 1, b: 2 },
            func: (args) => args.a + args.b
        });

        ok(actionExecution.startDate, 'startDate not set');
        notOk(actionExecution.endDate, 'endDate set before execution');

        const actionStore = new ActionStore();

        actionStore.successStore.subscribe(actionExecution.actionType, (successAction) => {
            equal(successAction.returnData, 3, 'execAction Return wrong value');
            ok(successAction.actionType, 'actionType not set');
            ok(successAction.args, 'args not set');
            ok(successAction.endDate, 'endDate not set');
            ok(successAction.startDate, 'startDate not set');
            ok(successAction.func, 'func not set');
            notOk(successAction.error, 'has error');
            done();
        });

        actionStore.execAction(actionExecution)
            .then(returnData => equal(returnData, 3, 'execAction Return wrong value'));
    });

    it('Error func', (done) => {
        const error = 'expected error';

        const action = new ActionExecution({
            actionType: 'ERROR_FUNC',
            args: { a: 1, b: 2 },
            func: (args) => { throw Error(error); }
        });

        ok(action.startDate, 'startDate not set');
        notOk(action.endDate, 'endDate set before execution');

        const actionStore = new ActionStore();

        actionStore.errorStore.subscribe(action.actionType, actionError => {
            ok(actionError.actionType, 'actionType not set');
            ok(actionError.args, 'args not set');
            ok(actionError.endDate, 'endDate not set');
            ok(actionError.startDate, 'startDate not set');
            ok(actionError.func, 'func not set');
            equal(actionError.error.message, error, 'Different error msg');
            done();
        });

        actionStore.execAction(action).catch((e) => {
            equal(e.message, error);
        });
    });
});
