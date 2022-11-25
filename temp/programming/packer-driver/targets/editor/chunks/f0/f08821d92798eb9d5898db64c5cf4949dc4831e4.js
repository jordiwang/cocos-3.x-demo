System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, Button, director, GlobalStore, WolfController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, UIController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalStore(extras) {
    _reporterNs.report("GlobalStore", "./GlobalStore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWolfController(extras) {
    _reporterNs.report("WolfController", "./WolfController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      Button = _cc.Button;
      director = _cc.director;
    }, function (_unresolved_2) {
      GlobalStore = _unresolved_2.default;
    }, function (_unresolved_3) {
      WolfController = _unresolved_3.WolfController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff7fe6UbWlLLbcnYJSppo3R", "UIController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Button', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIController", UIController = (_dec = ccclass('UIController'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = class UIController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "wolf", _descriptor, this);

          _initializerDefineProperty(this, "goHelloWorldButton", _descriptor2, this);

          _initializerDefineProperty(this, "uiContainer", _descriptor3, this);

          _initializerDefineProperty(this, "tips", _descriptor4, this);

          _initializerDefineProperty(this, "score", _descriptor5, this);

          this.onStartGame = () => {
            if ((_crd && GlobalStore === void 0 ? (_reportPossibleCrUseOfGlobalStore({
              error: Error()
            }), GlobalStore) : GlobalStore).data.gameStatus !== 1) {
              (_crd && GlobalStore === void 0 ? (_reportPossibleCrUseOfGlobalStore({
                error: Error()
              }), GlobalStore) : GlobalStore).setData('gameStatus', 1);
              this.wolf.getComponent(_crd && WolfController === void 0 ? (_reportPossibleCrUseOfWolfController({
                error: Error()
              }), WolfController) : WolfController).reset();
              this.uiContainer.active = false;
            }
          };

          this.onGoHelloWorld = () => {
            director.loadScene('HelloWorld');
          };

          this.onGameStatusChange = eventData => {
            if (eventData.key === 'gameStatus') {
              if (eventData.data === 2) {
                this.tips.string = '游戏结束\n点击重新开始';
                this.score.string = `距离: ${(this.wolf.position.z + 19).toFixed(1)} 米`;
                this.uiContainer.active = true;
              }
            }
          };
        }

        start() {
          this.bindEvnet();
        }

        bindEvnet() {
          this.node.on(Node.EventType.TOUCH_START, this.onStartGame);
          this.goHelloWorldButton.node.on(Node.EventType.TOUCH_START, this.onGoHelloWorld);
          (_crd && GlobalStore === void 0 ? (_reportPossibleCrUseOfGlobalStore({
            error: Error()
          }), GlobalStore) : GlobalStore).on('dataChange', this.onGameStatusChange);
        }

        onDestory() {
          this.node.off(Node.EventType.TOUCH_START, this.onStartGame);
          this.goHelloWorldButton.node.off(Node.EventType.TOUCH_START, this.onGoHelloWorld);
          (_crd && GlobalStore === void 0 ? (_reportPossibleCrUseOfGlobalStore({
            error: Error()
          }), GlobalStore) : GlobalStore).off('dataChange', this.onGameStatusChange);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wolf", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "goHelloWorldButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "uiContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f08821d92798eb9d5898db64c5cf4949dc4831e4.js.map