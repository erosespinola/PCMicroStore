'use strict';

/**
* @ngdoc overview
* @name pcmicroStoreApp
* @description
* # pcmicroStoreApp
*
* Main module of the application.
*/
angular
.module('pcmicroStoreApp', [
    'pcmicroStoreApp.MoltinAuth',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
])
.config(function($locationProvider, $routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
            brands: function($q, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin) {
                    moltin.Brand.List({limit: 30}, function(brands) {
                        deferred.resolve(brands);
                    });
                });
                return deferred.promise;
            },
            categories: function($q, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin) {
                    moltin.Category.List({limit: 30}, function(categories) {
                        deferred.resolve(categories);
                    });
                });
                return deferred.promise;
            },
            products: function($q, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin) {
                    moltin.Product.List({limit: 21}, function(products) {
                        deferred.resolve(products);
                    });
                });
                return deferred.promise;
            }
        }
    })

    .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'products',
        resolve: {
            brands: function($q, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin) {
                    moltin.Brand.List({limit: 30}, function(brands) {
                        deferred.resolve(brands);
                    });
                });
                return deferred.promise;
            },
            categories: function($q, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin) {
                    moltin.Category.List({limit: 30}, function(categories) {
                        deferred.resolve(categories);
                    });
                });
                return deferred.promise;
            },
            items: function($q, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin) {
                    moltin.Product.List({limit: 300}, function(items) {
                        deferred.resolve(items);
                    });
                });
                return deferred.promise;
            },
            params: function($route) {
                return $route.current.params;
            }
        }
    })

    .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product',
        resolve: {
            brands: function($q, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin) {
                    moltin.Brand.List({limit: 30}, function(brands) {
                        deferred.resolve(brands);
                    });
                });
                return deferred.promise;
            },
            categories: function($q, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin) {
                    moltin.Category.List({limit: 30}, function(categories) {
                        deferred.resolve(categories);
                    });
                });
                return deferred.promise;
            },
            item: function($q, $route, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin) {
                    moltin.Product.Get($route.current.params.id, function(item) {
                        deferred.resolve(item);
                    });
                });
                return deferred.promise;
            },
            relatedItems: function($q, $route, MoltinAuth) {
                var deferred = $q.defer();
                $q.when(MoltinAuth).then(function(moltin) {
                    moltin.Product.Get($route.current.params.id, function(item) {
                        moltin.Product.Search({limit: 7, category: Object.keys(item.category.data)[0]}, function(items) {
                            deferred.resolve(items);
                        });
                    });
                });                
                return deferred.promise;
            }
        }
    })

    .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
    })

    .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout'
    })

    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
    })

    .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
    })

    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
    })

    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })

    .otherwise({
        redirectTo: '404.html'
    });
});
