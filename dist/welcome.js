System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var computedFrom, Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia ES6 App skeleton app!';
          this.firstName = 'John';
          this.lastName = 'Doe';
        }

        _createClass(Welcome, [{
          key: 'welcome',
          value: function welcome() {
            alert('Welcome, ' + this.fullName + '!');
          }
        }, {
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQUVhLE9BQU8sRUFrQlAsbUJBQW1COzs7Ozs7Ozt1Q0FwQnhCLFlBQVk7OztBQUVQLGFBQU87aUJBQVAsT0FBTztnQ0FBUCxPQUFPOztlQUNsQixPQUFPLEdBQUcsOENBQThDO2VBQ3hELFNBQVMsR0FBRyxNQUFNO2VBQ2xCLFFBQVEsR0FBRyxLQUFLOzs7cUJBSEwsT0FBTzs7aUJBYVgsbUJBQUU7QUFDUCxpQkFBSyxlQUFhLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQztXQUNyQzs7O2VBTlcsZUFBRTtBQUNaLG1CQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRztXQUM3Qzs7O2VBWFUsT0FBTzs7Ozs7QUFrQlAseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7O3FCQUFuQixtQkFBbUI7O2lCQUN4QixnQkFBQyxLQUFLLEVBQUM7QUFDWCxtQkFBTyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3JDOzs7ZUFIVSxtQkFBbUIiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcHV0ZWRGcm9tfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBjbGFzcyBXZWxjb21le1xuICBoZWFkaW5nID0gJ1dlbGNvbWUgdG8gdGhlIEF1cmVsaWEgRVM2IEFwcCBza2VsZXRvbiBhcHAhJztcbiAgZmlyc3ROYW1lID0gJ0pvaG4nO1xuICBsYXN0TmFtZSA9ICdEb2UnO1xuXG4gIC8vR2V0dGVycyBjYW4ndCBiZSBvYnNlcnZlZCB3aXRoIE9iamVjdC5vYnNlcnZlLCBzbyB0aGV5IG11c3QgYmUgZGlydHkgY2hlY2tlZC5cbiAgLy9Ib3dldmVyLCBpZiB5b3UgdGVsbCBBdXJlbGlhIHRoZSBkZXBlbmRlbmNpZXMsIGl0IG5vIGxvbmdlciBuZWVkcyB0byBkaXJ0eSBjaGVjayB0aGUgcHJvcGVydHkuXG4gIC8vVG8gb3B0aW1pemUgYnkgZGVjbGFyaW5nIHRoZSBwcm9wZXJ0aWVzIHRoYXQgdGhpcyBnZXR0ZXIgaXMgY29tcHV0ZWQgZnJvbSwgdW5jb21tZW50IHRoZSBsaW5lIGJlbG93LlxuICAvL0Bjb21wdXRlZEZyb20oJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScpXG4gIGdldCBmdWxsTmFtZSgpe1xuICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XG4gIH1cblxuICB3ZWxjb21lKCl7XG4gICAgYWxlcnQoYFdlbGNvbWUsICR7dGhpcy5mdWxsTmFtZX0hYCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwcGVyVmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcodmFsdWUpe1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
