'use strict';

require('angular/angular');

var contactApp = angular.module('contactApp', []);

require('../controllers/contactCtrl')(contactApp);

/*(function() {
	var alphabet = ['A', 'B', 'C'];
	alphabet.forEach(function(letter) {
			angular.element('#key').append("hi");
				'<li ng-class=\"{active:tab===' + letter +'}\">
          <a href ng-click=\"getByLetter(' + letter +')\">' + letter + '</a>
       </li>');
	});
});*/
