System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, BoxCollider, AudioSource, CCFloat, GlobalStore, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, WolfController;

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
      Vec3 = _cc.Vec3;
      BoxCollider = _cc.BoxCollider;
      AudioSource = _cc.AudioSource;
      CCFloat = _cc.CCFloat;
    }, function (_unresolved_2) {
      GlobalStore = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7ed8rIIVdMlaPtXF75Z2ug", "WolfController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'input', 'Input', 'math', 'RigidBody', 'BoxCollider', 'ICollisionEvent', 'EventTouch', 'AudioClip', 'AudioSource', 'CCFloat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WolfController", WolfController = (_dec = ccclass('WolfController'), _dec2 = property(CCFloat), _dec3 = property(CCFloat), _dec4 = property(CCFloat), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class WolfController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "forwardSpeed", _descriptor, this);

          _initializerDefineProperty(this, "sideSpeed", _descriptor2, this);

          _initializerDefineProperty(this, "rorateAngle", _descriptor3, this);

          _initializerDefineProperty(this, "leftButton", _descriptor4, this);

          _initializerDefineProperty(this, "rightButton", _descriptor5, this);

          this.leftDown = false;
          this.rightDown = false;
          this.newPosition = new Vec3();

          this.onLeftTouchStart = evt => {
            evt.propagationStopped = true;
            this.leftDown = true;
            this.node.setRotationFromEuler(new Vec3(0, this.rorateAngle, 0));
          };

          this.onLeftTouchEnd = evt => {
            evt.propagationStopped = true;
            this.leftDown = false;
            this.node.setRotationFromEuler(new Vec3(0, 0, 0));
          };

          this.onRightTouchStart = evt => {
            evt.propagationStopped = true;
            this.rightDown = true;
            this.node.setRotationFromEuler(new Vec3(0, -this.rorateAngle, 0));
          };

          this.onRightTouchEnd = evt => {
            evt.propagationStopped = true;
            this.rightDown = false;
            this.node.setRotationFromEuler(new Vec3(0, 0, 0));
          };

          this.onCollisionEnter = evt => {
            if (evt.otherCollider.node.name === 'Obstacale') {
              this.enabled = false;
              this.getComponent(AudioSource).stop();
              (_crd && GlobalStore === void 0 ? (_reportPossibleCrUseOfGlobalStore({
                error: Error()
              }), GlobalStore) : GlobalStore).setData('gameStatus', 2);
            }
          };

          this.onGameStatusChange = eventData => {
            if (eventData.key === 'gameStatus' && eventData.data === 1) {
              this.getComponent(AudioSource).play();
            }
          };
        }

        start() {
          this.bindEvent();
        }

        onDestory() {
          this.offEvent();
        }

        bindEvent() {
          this.leftButton.on(Node.EventType.TOUCH_START, this.onLeftTouchStart);
          this.leftButton.on(Node.EventType.TOUCH_END, this.onLeftTouchEnd);
          this.rightButton.on(Node.EventType.TOUCH_START, this.onRightTouchStart);
          this.rightButton.on(Node.EventType.TOUCH_END, this.onRightTouchEnd);
          this.node.getComponent(BoxCollider).on('onCollisionEnter', this.onCollisionEnter);
          (_crd && GlobalStore === void 0 ? (_reportPossibleCrUseOfGlobalStore({
            error: Error()
          }), GlobalStore) : GlobalStore).on('dataChange', this.onGameStatusChange);
        }

        offEvent() {
          this.leftButton.off(Node.EventType.TOUCH_START, this.onLeftTouchStart);
          this.leftButton.off(Node.EventType.TOUCH_END, this.onLeftTouchEnd);
          this.rightButton.off(Node.EventType.TOUCH_START, this.onRightTouchStart);
          this.rightButton.off(Node.EventType.TOUCH_END, this.onRightTouchEnd);
          this.node.getComponent(BoxCollider).off('onCollisionEnter', this.onCollisionEnter);
        }

        reset() {
          this.enabled = true;
          this.node.setPosition(new Vec3(0, 0.5, -19));
        }

        update(deltaTime) {
          if ((_crd && GlobalStore === void 0 ? (_reportPossibleCrUseOfGlobalStore({
            error: Error()
          }), GlobalStore) : GlobalStore).data.gameStatus === 1) {
            this.newPosition = this.node.getPosition();
            this.newPosition.z += deltaTime * this.forwardSpeed;

            if (this.leftDown) {
              this.newPosition.x += deltaTime * this.sideSpeed;
            }

            if (this.rightDown) {
              this.newPosition.x -= deltaTime * this.sideSpeed;
            }

            if (this.newPosition.x >= 4.8) {
              this.newPosition.x = 4.8;
            } else if (this.newPosition.x <= -4.8) {
              this.newPosition.x = -4.8;
            }

            this.node.setPosition(this.newPosition);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "forwardSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sideSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rorateAngle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "leftButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rightButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=98ab289b7bfbeee31958f9c134c549aa4dd321da.js.map