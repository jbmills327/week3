//with 2 arguments we are creating a module and with 1 argument we are calling a module.
angular.module("myApp", [])
    .controller("MainCtrl", mainController);


function mainController() {
    var main = this;
    main.hideTheThings = false;
    main.profileInfo = [];
    main.newPerson = {
        "name": "",
        "bio": "",
        "book": "",
        "library": ""
    }
    main.addInfo = function() {
        main.profileInfo.push(main.newPerson);

        // manually trigger modal;
        $("#myModal").modal("hide");
        main.hideTheThings = !hideTheThings;

        // give person a new object
        // main.newPerson = {};





    }

}
