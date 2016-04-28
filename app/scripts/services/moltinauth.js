'use strict';

/**
* @ngdoc service
* @name pcmicroStoreApp.MoltinAuth
* @description
* # MoltinAuth
* Factory in the pcmicroStoreApp.
*/
angular.module('pcmicroStoreApp.MoltinAuth', [])
.factory('MoltinAuth', function($q) { 
	var deferred = $q.defer(); 
	var moltin = new Moltin({publicId: 'ebnvPqsv60ZW1FgCuHxpWcgescuXofZOhQ0DcxUC'}); 
	moltin.Authenticate(function() { 
		deferred.resolve(moltin); 
	}); 

	return deferred.promise; 
});