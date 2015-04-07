'use strict';

describe('angular-jsuri', function() {
  var Uri, example;

  beforeEach(module('angular-jsuri'));

  beforeEach(inject(function($injector, _$rootScope_, _Uri_) {
    Uri = _Uri_;
    example = new Uri('http://user:pass@www.test.com:81/index.html?q=books#fragment');
  }));

  describe('Uri', function() {
    it('is defined', function() {
      expect(Uri).toBeDefined();
      expect(Uri).toEqual(jasmine.any(Function));
    });

    it('works', function() {
      expect(example.protocol()).toEqual('http');
      expect(example.userInfo()).toEqual('user:pass');
      expect(example.host()).toEqual('www.test.com');
      expect(example.port()).toEqual('81');
      expect(example.path()).toEqual('/index.html');
      expect(example.query()).toEqual('?q=books');
      expect(example.anchor()).toEqual('fragment');
    });
  });
});
