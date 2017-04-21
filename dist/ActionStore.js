'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Action = require('./Action');

var _BaseStore = require('./BaseStore');

var _BaseStore2 = _interopRequireDefault(_BaseStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var ActionStore = function () {
    function ActionStore() {
        _classCallCheck(this, ActionStore);

        this.toDoStore = new _BaseStore2.default();
        this.successStore = new _BaseStore2.default();
        this.errorStore = new _BaseStore2.default();
    }

    _createClass(ActionStore, [{
        key: 'execAction',
        value: function execAction(args) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var action;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                action = new _Action.ActionExecution(args);
                                _context.prev = 1;
                                _context.t0 = action;
                                _context.next = 5;
                                return action.func(action.args);

                            case 5:
                                _context.t1 = _context.sent;

                                _context.t0.setReturnData.call(_context.t0, _context.t1);

                                console.log('Action.exectAction after setReturnData', action);
                                this.successStore.dispatch(action);
                                return _context.abrupt('return', Promise.resolve(action.returnData));

                            case 12:
                                _context.prev = 12;
                                _context.t2 = _context['catch'](1);

                                action.setError(_context.t2);
                                console.log('$$$ $$$ $$$ $$$ Dispatcinh error $$$ $$$ $$$ ');
                                this.errorStore.dispatch(action);
                                return _context.abrupt('return', Promise.reject(action));

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 12]]);
            }));
        }
    }]);

    return ActionStore;
}();
//# sourceMappingURL=ActionStore.js.map


exports.default = ActionStore;