angular.module("myApp", [])
    .controller("MainCtrl", mainController);

function mainController() {
    var main = this;

    main.name = false;
    main.namePeople = "test";

    main.runThis = function() {
        console.log("This is working");
        main.name = !main.name;
    }
    main.enterKey = function(keyEvent) {
        if (keyEvent.which === 13) {
            return main.runThis();
            // console.log("Enter key is working");
        };
    }
}
