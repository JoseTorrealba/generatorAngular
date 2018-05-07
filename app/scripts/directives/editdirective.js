'use strict';

/**
 * @ngdoc directive
 * @name exampleApp.directive:editDirective
 * @description
 * # editDirective
 */
angular.module('exampleApp')
    .directive('editDirective', function() {
        return {
            templateUrl: 'views/edit-directive.html',
            bindToController: true,
            controller: ControllerEdit,
            controllerAs: 'vm',
            restrict: 'EA',
            transclude: true,
            require: '^conteinerDirective',
            scope: {
                user: '=us'
            },
            link: function postLink(scope, element, attrs, ctrl) {
                console.log(scope);
            }
        };

        function ControllerEdit() {
            var vm = this;
            vm.edit = false;

            vm.editar = editar;
            vm.toggle = toggle;
            vm.viewClass = viewClass;

            function editar() {
                console.log(vm.user);

            };

            function toggle() {
                vm.edit = !vm.edit
            };

            function viewClass() {

                return { 'hide': vm.edit };
            };
        }
    });