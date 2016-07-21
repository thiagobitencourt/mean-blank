(function() {
    'use strict';

    angular
        .module('app.second')
        .controller('SecondController', SecondController);

    /* @ngInject */
    function SecondController() {
        var second = this;
        second.message = "Message from the second view!";
    }
})();
