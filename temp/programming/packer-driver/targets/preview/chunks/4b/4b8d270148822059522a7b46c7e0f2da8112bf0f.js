System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, CCInteger, instantiate, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SpineController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      CCInteger = _cc.CCInteger;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae8f49A+q9PzIY8ursu8+jH", "SpineController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'CCInteger', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpineController", SpineController = (_dec = ccclass('SpineController'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(CCInteger), _dec(_class = (_class2 = class SpineController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "peoplePrefab", _descriptor, this);

          _initializerDefineProperty(this, "peopleContainer", _descriptor2, this);

          _initializerDefineProperty(this, "peopleTotal", _descriptor3, this);
        }

        start() {
          this.loadPeople();
        }

        update(deltaTime) {}

        loadPeople() {
          for (var i = 0; i < this.peopleTotal; i++) {
            var peopleNode = instantiate(this.peoplePrefab);
            peopleNode.setPosition(-210 + Math.floor(i % 4) * 130, 570 - Math.floor(i / 4) * 48);
            this.peopleContainer.addChild(peopleNode);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "peoplePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "peopleContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "peopleTotal", [_dec4], {
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
//# sourceMappingURL=4b8d270148822059522a7b46c7e0f2da8112bf0f.js.map