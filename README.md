angular-jsuri
=============

Angular dependency injection for [jsUri](https://github.com/derek-watson/jsUri).

Installation
------------

Install this service with [bower](http://bower.io):

	bower install angular-jsuri

Angular and jsUri must be loaded prior to angular-jsuri.


Usage
-----

```javascript
var module = angular.module('app', ['angular-jsuri']);

module.controller('HomeController', [
  '$scope',
  'Uri',
  function($scope, Uri) {
    $scope.uri = new Uri('http://user:pass@www.test.com:81/index.html?q=books#fragment');
    $scope.uriParts = {
      protocol: uri.protocol(),    // http
      userInfo: uri.userInfo(),    // user:pass
      host: uri.host(),            // www.test.com
      port: uri.port(),            // 81
      path: uri.path(),            // /index.html
      query: uri.query(),          // q=books
      anchor: uri.anchor()         // fragment
    }
]);
```

License
-------

&copy; Dan Jarvis 2015, [MIT](http://danjarvis.mit-license.org)
