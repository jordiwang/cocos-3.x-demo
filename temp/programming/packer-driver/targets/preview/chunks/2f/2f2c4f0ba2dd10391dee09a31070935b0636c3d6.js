System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GlobalStore, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c6a98EL7BI3YBwkwruHbSX", "GlobalStore", undefined);

      GlobalStore = class GlobalStore {
        constructor() {
          this.eventMap = void 0;
          this.data = void 0;
          this.eventMap = {};
          this.data = {
            gameStatus: 0 // 0-未开始 1-运行中 2-结束

          };
        }

        setData(key, data) {
          this.data[key] = data;
          this.trigger('dataChange', {
            key,
            data
          });
        }

        on(eventName, callback) {
          if (!this.eventMap[eventName]) {
            this.eventMap[eventName] = [];
          }

          this.eventMap[eventName].push(callback);
        }

        off(eventName, callback) {
          if (!this.eventMap[eventName] || !this.eventMap[eventName].length) {
            return;
          }

          var index = this.eventMap[eventName].findIndex(item => item === callback);
          this.eventMap[eventName].splice(index, 1);
        }

        trigger(eventName, eventData) {
          var _this$eventMap$eventN;

          if (((_this$eventMap$eventN = this.eventMap[eventName]) == null ? void 0 : _this$eventMap$eventN.length) > 0) {
            this.eventMap[eventName].forEach(callback => {
              callback(eventData);
            });
          }
        }

      };

      _export("default", new GlobalStore());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f2c4f0ba2dd10391dee09a31070935b0636c3d6.js.map