var vistas = angular.module("vistas", ['ngRoute','ngAnimate']);
 
vistas.config(function($routeProvider) {
    $routeProvider
        .when('/profile', {
            templateUrl: 'app/views/profile.html',
            controller: 'mainController'
        })
        .when('/skills', {
            templateUrl: 'app/views/skills.html',
            controller: 'skillsController'
        })
	    .when('/recent_jobs', {
            templateUrl: 'app/views/recent_jobs.html',
            controller: 'jobsController'
        })
	    .when('/contact', {
            templateUrl: 'app/views/contact.html',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: '/profile'
        });
});
 
vistas.controller('mainController', function($scope) {
    $scope.pageClass = 'profile';
});

vistas.controller('skillsController', function($scope) {
    $scope.pageClass = 'profile';
});

vistas.controller('jobsController', function($scope) {
    $scope.pageClass = 'profile';
});

vistas.controller('contactController', function($scope) {
    $scope.pageClass = 'profile';
});

$(".burguer").click(function() {
  $(".bar").toggleClass("bar2");
  $(".menu-collapsed").toggleClass("menu-expanded");	
});

$(".menu-collapsed a").click(function() {
  $(".menu-collapsed").toggleClass("menu-expanded");
  $(".bar").toggleClass("bar2");
});