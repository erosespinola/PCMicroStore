'use strict';

/**
 * @ngdoc function
 * @name pcmicroStoreApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the pcmicroStoreApp
 */
angular.module('pcmicroStoreApp').controller('ProductsCtrl', function () {
	$('#products_link').addClass('active');
    $('#home_link').removeClass('active');
	$('#contact_link').removeClass('active');
});
