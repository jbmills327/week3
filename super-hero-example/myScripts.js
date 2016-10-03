var app = angular.module("myApp", []);
app.controller('MainController', function($scope) {
    $scope.title = "Every team needs a captain";
    $scope.motto = "Avenger Assemble";
    $scope.heroes = ["Captain America", "Black Widow", "Thor", "Iron Man"];
    $scope.newAvenger = "";

    $scope.addNewHero = function() {
        $scope.heroes.push($scope.newAvenger);
    }

});
