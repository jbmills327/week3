var app = angular.module('myApp', []);
app.controller('MainController', function($scope) {
    $scope.hideThePopUp = false;

    $scope.toggle = function() {
        $scope.hideThePopUp = !$scope.hideThePopUp;
    }

});
