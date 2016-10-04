angular.module("myApp", [])
    .controller("MainCtrl", mainController);

function mainController() {
    var main = this;

    main.name = false;
    main.namePeople = "Enter you name";
    main.nameAge = "Age";
    main.favoriteCareBear = "Favorite Care Bear";

    main.runThis = function() {
        // console.log("This is working");
        main.name = !main.name;
    }
    main.enterKey = function(keyEvent) {
        if (keyEvent.which === 13) {
            return main.runThis();
            // console.log("Enter key is working");
        };
    }
}
