System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      App = (function () {
        function App(router) {
          this.navigation = [{ href: "#/hot", title: "Hot" }, { href: "#/new", title: "New" }, { href: "#/rising", title: "Rising" }, { href: "#/controversial", title: "Controversial" }, { href: "#/top", title: "Top" }, { href: "#/gilded", title: "Gilded" }, { href: "#/wiki", title: "Wiki" }, { href: "#/promoted", title: "Promoted" }];

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Reddit";
            config.map([{ route: ["/:type"], moduleId: "listing" }]).mapUnknownRoutes(function (instruction) {
              instruction.config.moduleId = "listing";
              console.log("instruction", instruction);
            });
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return App;
      })();
      _export("App", App);
    }
  };
});