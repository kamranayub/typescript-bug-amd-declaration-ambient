var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("Configurable", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Configurable(base) {
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, args) || this;
            }
            return class_1;
        }(base));
    }
    exports.Configurable = Configurable;
});
define("Class", ["require", "exports", "Configurable"], function (require, exports, Configurable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HiddenClass = (function () {
        function HiddenClass() {
        }
        return HiddenClass;
    }());
    exports.HiddenClass = HiddenClass;
    var ActualClass = (function (_super) {
        __extends(ActualClass, _super);
        function ActualClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ActualClass;
    }(Configurable_1.Configurable(HiddenClass)));
    exports.ActualClass = ActualClass;
});
//# sourceMappingURL=dist.amd.js.map