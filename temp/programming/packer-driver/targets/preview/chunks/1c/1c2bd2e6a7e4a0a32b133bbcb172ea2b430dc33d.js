System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, CCInteger, GlobalStore, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, BlockController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalStore(extras) {
    _reporterNs.report("GlobalStore", "./GlobalStore", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      CCInteger = _cc.CCInteger;
    }, function (_unresolved_2) {
      GlobalStore = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "657b9a0+t1O35g2f/0jx+i5", "BlockController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'CCInteger']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BlockController", BlockController = (_dec = ccclass('BlockController'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(CCInteger), _dec(_class = (_class2 = class BlockController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "wolf", _descriptor, this);

          _initializerDefineProperty(this, "block", _descriptor2, this);

          _initializerDefineProperty(this, "blockNumber", _descriptor3, this);

          this.blockTotal = 0;
          this.isLoadBlock = false;
          this.lastBlock = 0;

          this.onGameStatusChange = eventData => {
            if (eventData.key === 'gameStatus') {
              if (eventData.data === 1) {
                this.node.removeAllChildren();
                this.blockTotal = 0;
                this.lastBlock = 0;
                this.loadBlock();
              }
            }
          };
        }

        start() {
          this.loadBlock();
          (_crd && GlobalStore === void 0 ? (_reportPossibleCrUseOfGlobalStore({
            error: Error()
          }), GlobalStore) : GlobalStore).on('dataChange', this.onGameStatusChange);
        }

        onDestory() {
          (_crd && GlobalStore === void 0 ? (_reportPossibleCrUseOfGlobalStore({
            error: Error()
          }), GlobalStore) : GlobalStore).off('dataChange', this.onGameStatusChange);
        }

        loadBlock() {
          this.isLoadBlock = true;

          for (var i = 0; i < this.blockNumber; i++) {
            var blockNode = instantiate(this.block);
            blockNode.setPosition(0, 0, 40 * this.blockTotal);
            this.blockTotal += 1;
            this.node.addChild(blockNode);
          }

          this.isLoadBlock = false;
        }

        removeBlock() {
          this.node.removeChild(this.node.children[0]);
        }

        update(deltaTime) {
          if ((_crd && GlobalStore === void 0 ? (_reportPossibleCrUseOfGlobalStore({
            error: Error()
          }), GlobalStore) : GlobalStore).data.gameStatus === 1) {
            var nowPosition = this.wolf.position.z + 19;

            if (!this.isLoadBlock && this.blockTotal * 40 - nowPosition <= 60) {
              this.loadBlock();
            }

            if (Math.floor(nowPosition / 40) - this.lastBlock === 1) {
              this.removeBlock();
              this.lastBlock += 1;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wolf", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "block", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blockNumber", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c2bd2e6a7e4a0a32b133bbcb172ea2b430dc33d.js.map