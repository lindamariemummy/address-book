'use strict';

require('../../app/js/main');
require('angular-mocks');

describe('contacts conroller', function() {
  var $controllerConstructor;
  var $httpBackend;
  var $scope;

  beforeEach(angular.mock.module('contactApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var contactCtrl = $controllerConstructor('contactApp', {$scope: $scope});
    expect(typeof contactCtrl).toBe('object');
  });

  describe('rest request', function() {
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    /*it('should be able to make a basic call', function() {
      $httpBackend.expectPOST('/api/calcmmm').respond(200, {mean:2, median: 1.5, mode:1});
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.values = '1 1 2 4';
      $scope.calcMMM();
      $httpBackend.flush();
      expect($scope.values).toBeDefined();
      //console.log($scope);
      expect($scope.mean).toBe(2);
      expect($scope.median).toBe(1.5);
      expect($scope.mode).toBe(1);
    });*/
  });
});
