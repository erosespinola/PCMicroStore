'use strict';

/**
 * @ngdoc function
 * @name pcmicroStoreApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the pcmicroStoreApp
 */
angular.module('pcmicroStoreApp').controller('ProductsCtrl', function ($scope, categories, brands, items) {
	$scope.categories = _.sortBy(categories, "title");
	$scope.brands = _.sortBy(brands, "title");
	$scope.items = items;

	$('#products_link').addClass('active');
    $('#home_link').removeClass('active');
	$('#contact_link').removeClass('active');
});
