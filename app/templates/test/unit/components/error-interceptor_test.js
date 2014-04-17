'use strict';

describe('errorInterceptor', function () {

  var _httpBackend
    , _rootScope
    , _scope
    , _http
    , _errorInterceptor; 

  beforeEach(module('app'));

  beforeEach(inject(function ($injector,
                              $route,
                              $rootScope,
                              $http,
                              errorInterceptor) {


    _httpBackend = $injector.get('$httpBackend');
    _httpBackend.when('GET', '/not-allowed').respond(403, '');
    _httpBackend.when('GET', '/non-existing').respond(404, '');
    _httpBackend.when('GET', './partials/default.html').respond();

    _http = $http;
    _errorInterceptor = errorInterceptor;

    _scope = $rootScope.$new();
  }));

  afterEach(function () {
    _httpBackend.verifyNoOutstandingExpectation();
    _httpBackend.verifyNoOutstandingRequest();
  });

  it('should broadcast a "responseError" event', function () {

    var mock = { 
      error: function (resp) {
      }
    };
    spyOn(mock, 'error');

    _httpBackend.expectGET('./partials/default.html');

    _scope.$on('responseError', mock.error);
    _http.get('/not-allowed').then(null, mock.error);
    _scope.$digest();
    _httpBackend.flush();
    
    expect(mock.error).toHaveBeenCalled();

  });


});
