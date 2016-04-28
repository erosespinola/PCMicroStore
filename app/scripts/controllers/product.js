'use strict';

/**
 * @ngdoc function
 * @name pcmicroStoreApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the pcmicroStoreApp
 */
angular.module('pcmicroStoreApp').controller('ProductCtrl', function($scope, categories, brands, item, relatedItems) {
    $scope.categories = _.sortBy(categories, "title");
	$scope.brands = _.sortBy(brands, "title");
	$scope.item = item;
	$scope.relatedItems = _.reject(relatedItems, function(relatedItem) {
		return relatedItem.id === item.id;
	}).slice(0, 3);
});
