'use strict';

/**
* @ngdoc function
* @name pcmicroStoreApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the pcmicroStoreApp
*/
angular.module('pcmicroStoreApp').controller('MainCtrl', function($scope, categories, brands, products) {
	$scope.categories = _.sortBy(categories, "title");
	$scope.brands = _.sortBy(brands, "title");
	$scope.products = products;

	$scope.slides = [
	{ 
		title: "¡Gran oferta!", 
		subtitle: "Alienware 15", 
		text: "La computadora de alto rendimiento ideal para jugar.",
		link: "",
		image: products[3].images[0].url.https 
	}, 
	{ 
		title: "¡Otra Gran oferta!", 
		subtitle: "XPS 13", 
		text: "La computadora de alto rendimiento ideal para jugar.",
		link: "",
		image: products[1].images[0].url.https 
	}];

	$scope.getClass = function getClass(index) {
		return index === 0 ? "active" : "";
	};


	$('#home_link').addClass('active');
	$('#products_link').removeClass('active');
	$('#contact_link').removeClass('active');
});