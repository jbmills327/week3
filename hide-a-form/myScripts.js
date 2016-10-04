angular.module("myApp", [])
    .controller("MainCtrl", mainController);

function mainController() {
    var main = this;
    main.formBox = false;
    main.personName = "";
    main.personBio = "";
    main.personBook = "";
    main.personLibrary = "";

    main.hideTheForm = function() {
        // console.log("This is working");
        // main.formBox = !main.formBox;
        main.personName = "";
    }
}
