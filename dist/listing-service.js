System.register(["aurelia-http-client", "aurelia-path"], function (_export) {
  "use strict";

  var HttpClient, join, _prototypeProperties, ListingService;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_aureliaPath) {
      join = _aureliaPath.join;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      ListingService = (function () {
        function ListingService(http) {
          this.http = http;
          this.baseUrl = "http://www.reddit.com/";
        }

        _prototypeProperties(ListingService, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          get: {
            value: function get(url) {
              return this.http.get(join(this.baseUrl, url) + ".json");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return ListingService;
      })();
      _export("ListingService", ListingService);
    }
  };
});