(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name exampleApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the exampleApp
     */
    angular
        .module('exampleApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    function MainCtrl() {
        var vm = this;
        vm.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        vm.directive = "";


        activate();

        ////////////////

        function activate() {}
    }
})();