var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ActionExecution } from './Action';
import BaseStore from './BaseStore';
export class ActionStore {
    constructor() {
        this.toDoStore = new BaseStore();
        this.successStore = new BaseStore();
        this.errorStore = new BaseStore();
    }
    execAction(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const action = new ActionExecution(args);
            try {
                action.setReturnData(yield action.func(action.args));
                console.log('Action.exectAction after setReturnData', action);
                this.successStore.dispatch(action);
                return Promise.resolve(action.returnData);
            }
            catch (e) {
                action.setError(e);
                console.log('$$$ $$$ $$$ $$$ Dispatcinh error $$$ $$$ $$$ ');
                this.errorStore.dispatch(action);
                return Promise.reject(action);
            }
        });
    }
}
//# sourceMappingURL=ActionStore.js.map