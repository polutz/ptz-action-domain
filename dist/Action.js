"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActionExecution = function () {
    function ActionExecution(args) {
        _classCallCheck(this, ActionExecution);

        this.startDate = new Date();
        this.actionType = args.actionType;
        this.func = args.func;
        this.args = args.args;
    }

    _createClass(ActionExecution, [{
        key: "setEnd",
        value: function setEnd() {
            this.endDate = new Date();
        }
    }, {
        key: "setReturnData",
        value: function setReturnData(returnData) {
            this.returnData = returnData;
            this.setEnd();
        }
    }, {
        key: "setError",
        value: function setError(error) {
            this.error = error;
            this.setEnd();
        }
    }]);

    return ActionExecution;
}();

exports.default = ActionExecution;
exports.ActionExecution = ActionExecution;
//# sourceMappingURL=Action.js.map