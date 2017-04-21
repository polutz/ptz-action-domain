import { equal } from 'ptz-assert';
import BaseStore from './BaseStore';
import { IAction } from './index';

describe('BaseStore', () => {
    it('Subscribe', (done) => {
        const store = new BaseStore<IAction<any>>();
        const actionType = 'SUM';
        const args = { a: 2, b: 3 };

        store.subscribe('otherAction', (action) => {
            throw Error('wrong subscriber!');
        });

        store.subscribe(actionType, (action) => {
            equal(action.actionType, actionType);
            equal(action.args, args);
            done();
        });

        store.dispatch({ actionType, args });
    });

    it('SubscribeAll', (done) => {
        const store = new BaseStore<IAction<any>>();
        const actionType = 'SUM';
        const args = { a: 2, b: 3 };

        store.subscribeAll((action) => {
            equal(action.actionType, actionType);
            equal(action.args, args);
            done();
        });

        store.dispatch({ actionType, args });
    });
});
