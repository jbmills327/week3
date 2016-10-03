var app = angular.module('myApp', []);
app.controller('mainController', function($scope) {
    // Defining message
    $scope.message = "This should be working";
    // defining list items
    $scope.listItem1 = "Potatos";
    $scope.listItem2 = "Chocolate";
    $scope.listItem3 = "Carrots";
    // setting myVar to false to use ng-hide
    $scope.myVar = false;
    // setting anotherVar to false to use ng-hide
    $scope.anotherVar = false;
    // Defining some filler text for paragraphs
    $scope.filler = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        // Function to toggle my h1 element
    $scope.logging = function() {
            console.log("This is some more stuff");
            $scope.myVar = !$scope.myVar;
        }
        // Function to toggle my list
    $scope.toggle = function() {
            console.log("To verify that this is working");
            $scope.anotherVar = !$scope.anotherVar;
        }
        // Function to change font color on hover
    $scope.changeColor = function() {
            // console.log("Testing hover");

        }
        // Function to manipulate links
    $scope.verify = function() {
        $scope.noGoingBack = confirm("Are you sure you want to continue to this site?");
        if (!$scope.noGoingBack) {
            event.preventDefault();
            return $scope.noGoingBack = true;
        };
    };
});
