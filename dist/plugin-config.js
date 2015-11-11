System.register([], function (_export) {
  "use strict";

  var PluginConfig;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      PluginConfig = (function () {
        function PluginConfig(aurelia) {
          _classCallCheck(this, PluginConfig);

          this.plugins = [];
          this.configs = {
            i18next: {}
          };

          this.aurelia = aurelia;
        }

        _createClass(PluginConfig, [{
          key: "configure",
          value: function configure() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _name = _step.value;

                this.aurelia.use.plugin(_name);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"]) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }]);

        return PluginConfig;
      })();

      _export("default", PluginConfig);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi1jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQXFCLFlBQVk7Ozs7Ozs7OztBQUFaLGtCQUFZO0FBTXBCLGlCQU5RLFlBQVksQ0FNbkIsT0FBTyxFQUFDO2dDQU5ELFlBQVk7O2VBQy9CLE9BQU8sR0FBRyxFQUFFO2VBQ1osT0FBTyxHQUFHO0FBQ1IsbUJBQU8sRUFBRSxFQUFFO1dBQ1o7O0FBR0csY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDMUI7O3FCQVJrQixZQUFZOztpQkFVdEIscUJBQUc7Ozs7OztBQUNWLG1DQUFpQixJQUFJLENBQUMsT0FBTyw4SEFBRTtvQkFBdEIsS0FBSTs7QUFDWCxvQkFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxDQUFDO2VBQy9COzs7Ozs7Ozs7Ozs7Ozs7V0FDRjs7O2VBZGtCLFlBQVk7Ozt5QkFBWixZQUFZIiwiZmlsZSI6InBsdWdpbi1jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5Db25maWcge1xuICBwbHVnaW5zID0gW107XG4gIGNvbmZpZ3MgPSB7XG4gICAgaTE4bmV4dDoge31cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihhdXJlbGlhKXtcbiAgICAgIHRoaXMuYXVyZWxpYSA9IGF1cmVsaWE7XG4gIH1cblxuICBjb25maWd1cmUoKSB7XG4gICAgZm9yIChsZXQgbmFtZSBvZiB0aGlzLnBsdWdpbnMpIHtcbiAgICAgIHRoaXMuYXVyZWxpYS51c2UucGx1Z2luKG5hbWUpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
