"use strict";angular.module("exampleApp",["ngAnimate","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("exampleApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("exampleApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),function(){function e(){function e(e,t,r){t.text("this is the myDirective directive")}var r={bindToController:!0,controller:t,controllerAs:"vm",link:e,restrict:"A",scope:{}};return r}function t(){}angular.module("exampleApp").directive("myDirective",e),DirmyDirectiveective.$inject=[]}();