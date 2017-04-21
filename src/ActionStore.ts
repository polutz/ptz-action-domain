import {
    ActionExecution,
    IAction,
    IActionExecution,
    IActionExecutionArgs
} from './Action';

import BaseStore, { IBaseStore } from './BaseStore';

export interface IActionStore {
    toDoStore: IBaseStore<IAction<any>>;
    successStore: IBaseStore<IActionExecution<any, any>>;
    errorStore: IBaseStore<IActionExecution<any, any>>;
}

export default class ActionStore implements IActionStore {
    toDoStore: IBaseStore<IAction<any>>;
    successStore: IBaseStore<IActionExecution<any, any>>;
    errorStore: IBaseStore<IActionExecution<any, any>>;

    constructor() {
        this.toDoStore = new BaseStore();
        this.successStore = new BaseStore();
        this.errorStore = new BaseStore();
    }

    async execAction<TArgs, TReturnData>(args: IActionExecutionArgs<TArgs, TReturnData>): Promise<TReturnData> {
        const action = new ActionExecution(args);

        try {
            action.setReturnData(await action.func(action.args));
            console.log('Action.exectAction after setReturnData', action);
            this.successStore.dispatch(action);
            return Promise.resolve(action.returnData);
        } catch (e) {
            action.setError(e);
            console.log('$$$ $$$ $$$ $$$ Dispatcinh error $$$ $$$ $$$ ');
            this.errorStore.dispatch(action);
            return Promise.reject(action);
        }
    }
}
