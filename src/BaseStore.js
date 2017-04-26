export default class BaseStore {
    constructor() {
        this.typeSubscribers = {};
        this.subscribers = [];
    }
    subscribe(type, func) {
        if (this.typeSubscribers[type] == null)
            this.typeSubscribers[type] = [func];
        else
            this.typeSubscribers[type].push(func);
    }
    subscribeAll(func) {
        this.subscribers.push(func);
    }
    dispatch(action) {
        console.log('this.subscribers', this.subscribers);
        this.subscribers.forEach(func => func(action));
        console.log('this.typeSubscribers', this.typeSubscribers);
        if (this.typeSubscribers[action.actionType])
            this.typeSubscribers[action.actionType].forEach(func => func(action));
    }
}
//# sourceMappingURL=BaseStore.js.map