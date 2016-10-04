angular.module("myApp", [])
    .controller("MainCtrl", mainController);

function mainController() {
    var main = this;
    main.formBox = false;
    main.personName = "";
    main.personBio = "";
    main.personBook = "";
    main.personLibrary = "";
    main.text = "Hello";
    main.personArray = [];

    main.hideTheForm = function() {
        main.formBox = !main.formBox;

    }



}
