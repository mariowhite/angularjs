var myApp = angular.module('myApp',[]);

myApp.controller('greetingController', ['$scope', '$filter', function($scope, $filter){

    $scope.name = 'Mario';

    $scope.lowercase = function () {

        return $filter('lowercase')($scope.name);

    }

}]);