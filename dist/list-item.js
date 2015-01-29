System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, ListItem;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      ListItem = (function () {
        function ListItem() {}

        _prototypeProperties(ListItem, {
          metadata: {
            value: function metadata() {
              return Behavior.withProperty("listing");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return ListItem;
      })();
      _export("ListItem", ListItem);
    }
  };
});