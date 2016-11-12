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
	$scope.selectedPrices = {low: null, high: null};
	
	$scope.brands = _.sortBy(brands, 'title');
	$scope.categories = _.sortBy(categories, 'title');

	$scope.filterItems = function() {
		var hasBrandSelected = _.reduce($scope.selectedBrands, function(carry, brand) { 
			return carry || brand; 
		}, false);

		var hasCategorySelected = _.reduce($scope.selectedCategories, function(carry, category) { 
			return carry || category; 
		}, false);
		
		if (hasCategorySelected && hasBrandSelected) {
			$scope.items = _.reject(items, function(item) {
				return !$scope.selectedCategories[_.keys(item.category.data)[0]] || 
							 !$scope.selectedBrands[item.brand.data.id];
			});
		} else if (hasCategorySelected) {
			$scope.items = _.reject(items, function(item) {
				return !$scope.selectedCategories[_.keys(item.category.data)[0]];
			});
		} else if (hasBrandSelected) {
			$scope.items = _.reject(items, function(item) {
				return !$scope.selectedBrands[item.brand.data.id];
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
