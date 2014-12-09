'use strict';

module.exports = function(app) {
  app.controller('contactCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                       'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                       'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                       'Y', 'Z'];

    //add a contact
    $scope.saveContact = function() {
      //console.log('function is called');
      $http({
        method: 'POST',
        url: 'http://localhost:3000/api/newcontact',
        data: $scope.contactInfo
      })
      .success(function() {
        $scope.message = $scope.contactInfo.firstName + '\'s contact info saved.';
        //if (!$scope.contacts) {$scope.contacts = [];}
        //$scope.contacts.push(data);
        //console.log(data);
      })
      .error(function() {
        $scope.message = 'Error saving contact info!';
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
      $scope.$parent.tab = letter;
      $scope.$parent.message = '';
      $http({
        method: 'GET',
        url: 'http://localhost:3000/api/contactsbylastname?q=' + letter
      })
      .success(function(data) {
        $scope.contacts = data;
        if (!data) $scope.$parent.message = 'No contacts begin with ' + letter + '.';
      })
      .error(function(data) {
        console.log('err', data);
      });
    };
  }]);
};
