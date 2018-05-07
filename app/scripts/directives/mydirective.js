(function() {

    /**
     * @ngdoc directive
     * @name exampleApp.directive:myDirective
     * @description
     * # myDirective
     */



    'use strict';

    angular.module('exampleApp')
        .directive('myDirective', myDirective);

    myDirective.$inject = [];

    function myDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            templateUrl: 'views/mi-directiva.html',
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            require: '^conteinerDirective',
            transclude: true,
            scope: {}
        };
        return directive;

        function link($scope, $element, $attrs, ctrl) {
            $scope.vm.ctrl = ctrl;
            //element.text('this is the myDirective directive');
        }
    }

    ControllerController.$inject = ['$scope'];

    function ControllerController(scope) {
        var vm = this;


        vm.addUser = addUser;

        function addUser() {
            vm.ctrl.users.push({ 'name': vm.name });
        };

    }
})();