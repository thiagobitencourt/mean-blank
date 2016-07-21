(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var home = this;

        home.pageTitle = 'Wellcome to a Angular.JS blank project';
    }
})();
