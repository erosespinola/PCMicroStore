'use strict';

/**
 * @ngdoc function
 * @name pcmicroStoreApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the pcmicroStoreApp
 */
angular.module('pcmicroStoreApp').controller('ProductsCtrl', function ($scope, categories, brands, items, params) {
	$scope.items = items;
	$scope.selectedBrands = {};
	$scope.selectedCategories = {};
	$scope.lowPrice = 0;
	$scope.highPrice = 0;
	
	$scope.brands = _.sortBy(brands, 'title');
	$scope.categories = _.sortBy(categories, 'title');

	$scope.filterItems = function() {
		var hasBrandSelected = _.reduce($scope.selectedBrands, function(carry, brand) { 
			return carry || brand; 
		}, false);

		var hasCategorySelected = _.reduce($scope.selectedCategories, function(carry, category) { 
			return carry || category; 
		}, false);
		
		var hasPriceSelected = !!$scope.lowPrice || !!$scope.highPrice;
	
		if (hasCategorySelected || hasBrandSelected || hasPriceSelected) {
			$scope.items = _.filter(items, function(item) {
				return (hasCategorySelected ? $scope.selectedCategories[_.keys(item.category.data)[0]] : true) && 
				       (hasBrandSelected ? $scope.selectedBrands[item.brand.data.id] : true) && 
				       (hasPriceSelected ? item.price.data.raw.with_tax <= $scope.highPrice && 
							                     item.price.data.raw.with_tax >= $scope.lowPrice :
							                     true);
			});
		} else {
			$scope.items = items;
		}
	};

	if (params.category) {
		$scope.selectedCategories[params.category] = true;
		$scope.filterItems();
	} else if (params.brand) {
		$scope.selectedBrands[params.brand] = true;
		$scope.filterItems();
	}

 	$('#products_link').addClass('active');
  $('#init_link').removeClass('active');
	$('#contact_link').removeClass('active');
});
