'use strict';

/**
 * @ngdoc function
 * @name pcmicroStoreApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the pcmicroStoreApp
 */
angular.module('pcmicroStoreApp').controller('ContactCtrl', function () {
	$('#contact_link').addClass('active');
    $('#init_link').removeClass('active');
	$('#products_link').removeClass('active');
});
