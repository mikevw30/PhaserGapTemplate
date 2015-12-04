 var helloApp = angular.module("HelloApp", []);
     helloApp.controller("HelloCtrl", [ '$scope', function($scope) {
     $scope.name = "World";
     } ]);