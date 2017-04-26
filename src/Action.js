export default class ActionExecution {
    constructor(args) {
        this.startDate = new Date();
        this.actionType = args.actionType;
        this.func = args.func;
        this.args = args.args;
    }
    setEnd() {
        this.endDate = new Date();
    }
    setReturnData(returnData) {
        this.returnData = returnData;
        this.setEnd();
    }
    setError(error) {
        this.error = error;
        this.setEnd();
    }
}
export { ActionExecution };
//# sourceMappingURL=Action.js.map