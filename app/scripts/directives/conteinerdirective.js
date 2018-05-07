(function() {
    'use strict';
    /**
     * @ngdoc directive
     * @name exampleApp.directive:conteinerDirective
     * @description
     * # conteinerDirective
     */

    angular
        .module('exampleApp')
        .directive('conteinerDirective', conteinerDirective);

    conteinerDirective.$inject = [];

    function conteinerDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            templateUrl: 'views/conteiner-directiva.html',
            bindToController: true,
            controller: ControllerConteiner,
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            transclude: true,
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {}
    }
    /* @ngInject */
    function ControllerConteiner() {
        var vm = this;
        vm.title = 'CONTEINER';
        vm.users = [];

    }
})();