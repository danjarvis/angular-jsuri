(function(win) {
  'use strict';
  return win.angular
    .module('angular-jsuri', [])
    .factory('Uri', [function() { return win.Uri; }]);
})(window);
