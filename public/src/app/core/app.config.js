(function(){
  'use strict';

  angular
    .module('angularBlank')
    .config(blankConfig);

  blankConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function blankConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/modules/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
      })
      .state('second', {
        url: '/second',
        templateUrl: 'app/modules/second/second.html',
        controller: 'SecondController',
        controllerAs: 'second'
      });
  };
})();
