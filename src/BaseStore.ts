import {
    IAction
} from './Action';

export type ISubscribeFunc<TAction> = (action: TAction) => void;

export interface IBaseStore<TAction> {
    subscribers: Array<ISubscribeFunc<TAction>>;
    typeSubscribers: { [type: string]: Array<ISubscribeFunc<TAction>> };
    subscribeAll(func: ISubscribeFunc<TAction>);
    subscribe(type: string, func: ISubscribeFunc<TAction>);
    dispatch<TArgs, TReturnData>(action: IAction<any>);
}

export default class BaseStore<TAction> implements IBaseStore<TAction> {
    subscribers: Array<ISubscribeFunc<TAction>>;
    typeSubscribers: { [type: string]: Array<ISubscribeFunc<TAction>> };

    constructor() {
        this.typeSubscribers = {};
        this.subscribers = [];
    }

    subscribe(type: string, func: ISubscribeFunc<TAction>) {
        if (this.typeSubscribers[type] == null)
            this.typeSubscribers[type] = [func];
        else
            this.typeSubscribers[type].push(func);
    }

    subscribeAll(func: ISubscribeFunc<TAction>) {
        this.subscribers.push(func);
    }

    dispatch(action: TAction & IAction<any>) {
        console.log('this.subscribers', this.subscribers);
        this.subscribers.forEach(func => func(action));

        console.log('this.typeSubscribers', this.typeSubscribers);
        if (this.typeSubscribers[action.actionType])
            this.typeSubscribers[action.actionType].forEach(func => func(action));
    }
}
