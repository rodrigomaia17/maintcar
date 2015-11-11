System.register(['./plugin-config'], function (_export) {
  'use strict';

  var PluginConfig;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    new PluginConfig(aurelia).configure();

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [function (_pluginConfig) {
      PluginConfig = _pluginConfig['default'];
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVPLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUNqQyxXQUFPLENBQUMsR0FBRyxDQUNSLHFCQUFxQixFQUFFLENBQ3ZCLGtCQUFrQixFQUFFLENBQUE7O0FBVXZCLFFBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDOztBQUV0QyxXQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzthQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7S0FBQSxDQUFDLENBQUM7R0FDeEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbHVnaW5Db25maWcgZnJvbSAnLi9wbHVnaW4tY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmRldmVsb3BtZW50TG9nZ2luZygpXG4gICAgLy8gLmRlZmF1bHRCaW5kaW5nTGFuZ3VhZ2UoKVxuICAgIC8vIC5kZWZhdWx0UmVzb3VyY2VzKClcbiAgICAvLyAuaGlzdG9yeSgpXG4gICAgLy8gLnJvdXRlcigpXG4gICAgLy8gLmV2ZW50QWdncmVnYXRvcigpXG5cbiAgLy8gbG9hZCByZXNvdXJjZXMgKGYuZXggZnJvbSBtb2R1bGVzKSBhbmQgbWFrZSB0aGUgZ2xvYmFsbHkgYWNjZXNzaWJsZVxuICAvLyBhdXJlbGlhLmdsb2JhbGl6ZVJlc291cmNlcygneCcsICd5Jyk7XG5cbiAgbmV3IFBsdWdpbkNvbmZpZyhhdXJlbGlhKS5jb25maWd1cmUoKTtcblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbihhID0+IGEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
