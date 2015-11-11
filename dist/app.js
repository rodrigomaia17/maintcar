System.register(['aurelia-router'], function (_export) {
  'use strict';

  var Router, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia';
            config.map([{ route: ['', 'welcome'], moduleId: './welcome', nav: true, title: 'Welcome' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Y0FFYSxHQUFHOzs7Ozs7Ozs4QkFGUixNQUFNOzs7QUFFRCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUcsUUFBUSxFQUFFLFdBQVcsRUFBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxTQUFTLEVBQUUsQ0FDbkYsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBUlUsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKXtcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsJ3dlbGNvbWUnXSwgIG1vZHVsZUlkOiAnLi93ZWxjb21lJywgICAgICBuYXY6IHRydWUsIHRpdGxlOidXZWxjb21lJyB9XG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
