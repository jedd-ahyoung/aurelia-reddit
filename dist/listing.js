System.register(["./listing-service"], function (_export) {
  "use strict";

  var ListingService, _prototypeProperties, Listing;
  return {
    setters: [function (_listingService) {
      ListingService = _listingService.ListingService;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Listing = (function () {
        function Listing(listingService) {
          this.listingService = listingService;
          this.listings = [];
          this.before = null;
          this.after = null;
        }

        _prototypeProperties(Listing, {
          inject: {
            value: function inject() {
              return [ListingService];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(type) {
              var _this = this;
              return this.listingService.get(type.type || "hot").then(function (response) {
                _this.listings = response.content.data.children;
                _this.before = response.content.data.before;
                _this.after = response.content.data.after;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          next: {
            value: function next() {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          prev: {
            value: function prev() {},
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Listing;
      })();
      _export("Listing", Listing);
    }
  };
});