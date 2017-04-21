// 1) Exec Action ==> Dispacth Action Done
// 2) Dispacth Action To Be Executed (from history to restore the db or from actions queue)

interface IAction<TArgs> {
    actionType: string;
    args: TArgs;
}

interface IActionExecution<TArgs, TReturnData> {
    startDate: Date;
    endDate: Date;
    actionType: string;
    args: TArgs;
    returnData: TReturnData;
    error: any;
    func: (args: TArgs) => TReturnData;
}

interface IActionExecutionArgs<TArgs, TReturnData> {
    actionType: string;
    func: (args: TArgs) => TReturnData;
    args: TArgs;
}

export default class ActionExecution<TArgs, TReturnData> implements IActionExecution<TArgs, TReturnData> {

    startDate: Date;
    endDate: Date;
    actionType: string;
    args: TArgs;
    returnData: TReturnData;
    error: any;
    func: (args: TArgs) => TReturnData;

    constructor(args: IActionExecutionArgs<TArgs, TReturnData>) {
        this.startDate = new Date();
        this.actionType = args.actionType;
        this.func = args.func;
        this.args = args.args;
    }

    setEnd() {
        this.endDate = new Date();
    }

    setReturnData(returnData: TReturnData): void {
        this.returnData = returnData;
        this.setEnd();
    }

    setError(error: any): void {
        this.error = error;
        this.setEnd();
    }
}

export {
    ActionExecution,
    IActionExecution,
    IActionExecutionArgs,
    IAction
};
