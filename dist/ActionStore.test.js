'use strict';

var _ActionStore = require('./ActionStore');

describe('Actions to replay', function () {
    var store;
    var allActions = {
        SAVE_USER: 'SAVE_USER',
        DELETE_USER: 'DELETE_USER',
        AUTH_USER: 'AUTH_USER',
        FORGOT_PASSWORD: 'FORGOT_PASSWORD',
        UPDATE_PASSWORD_TOKEN: 'UPDATE_PASSWORD_BY_TOKEN',
        UPDATE_PASSWORD: 'UPDATE_PASSWORD'
    };
    var authUser = { dtCreated: new Date(), ip: '195.1.1.1' };
    beforeEach(function () {
        store = new _ActionStore.ActionStore();
        store.toDoStore.subscribeAll(function (action) {
            switch (action.actionType) {
                case allActions.AUTH_USER:
                    console.log('log subscriber AUTH_USER');
                    break;
                case allActions.DELETE_USER:
                    console.log('log subscriber DELETE_USER');
                    break;
                case allActions.FORGOT_PASSWORD:
                    console.log('log subscriber FORGOT_PASSWORD');
                    break;
                case allActions.SAVE_USER:
                    console.log('log subscriber SAVE_USER');
                    break;
                case allActions.UPDATE_PASSWORD:
                    console.log('log subscriber UPDATE_PASSWORD');
                    break;
                case allActions.UPDATE_PASSWORD_TOKEN:
                    console.log('log subscriber UPDATE_PASSWORD_TOKEN');
                    break;
                default:
                    break;
            }
        });
        store.toDoStore.subscribeAll(function (action) {
            return console.log('logALL subscriber ' + action.actionType);
        });
    });
    it('Play actions', function () {
        store.toDoStore.dispatch({ actionType: allActions.SAVE_USER, args: { userName: 'angeloocana' } });
        store.toDoStore.dispatch({ actionType: allActions.AUTH_USER, args: { userName: 'angeloocana' } });
        store.toDoStore.dispatch({ actionType: allActions.DELETE_USER, args: { id: 'sdvsdsd' } });
    });
    it('GraphQL mutation example', function (done) {
        var user = {
            displayName: 'Ângelo Ocanã',
            email: 'angeloocana@gmail.com',
            userName: 'angeloocana',
            password: 'testtest'
        };
        function saveUser(data) {
            done();
        }
        store.toDoStore.subscribe(allActions.SAVE_USER, saveUser);
        store.toDoStore.dispatch({
            actionType: allActions.SAVE_USER,
            args: {
                user: user,
                authUser: authUser
            }
        });
    });
});
//# sourceMappingURL=ActionStore.test.js.map
//# sourceMappingURL=ActionStore.test.js.map