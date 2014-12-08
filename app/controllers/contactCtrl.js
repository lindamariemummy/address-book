'use strict';

module.exports = function(app) {
  app.controller('contactCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.alphabet = ['A', 'B', 'C', 'D', 'E'];

    //add a contact
    $scope.saveContact = function() {
      //console.log('function is called');
      $http({
        method: 'POST',
        url: 'http://localhost:3000/api/newcontact',
        data: $scope.contactInfo
      })
      .success(function(data) {
        $scope.message = 'Contact Saved';
        //if (!$scope.contacts) {$scope.contacts = [];}
        //$scope.contacts.push(data);
        //console.log(data);
      })
      .error(function(data) {
        console.log('err', data);
      });
    };

    //get all contacts
    $scope.getContacts = function() {
      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/allcontacts'
      })
      .success(function(data) {
        $scope.contacts = data;
      })
      .error(function(data) {
        console.log('err', data);
      });
    };

    //display by first letter
    $scope.getByLetter = function(letter) {
      console.log("hi");
      $scope.$parent.tab = letter;
      $scope.$parent.message = '';
      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/contactsbylastname?q=' + letter
      })
      .success(function(data) {
        $scope.contacts = data;
      })
      .error(function(data) {
        console.log('err', data);
      });
    };
  }]);
};
