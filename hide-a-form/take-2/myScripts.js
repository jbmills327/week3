angular.module("myApp", [])
    .controller("MainCtrl", mainController);

function mainController() {

    var main = this;
    // main.text = 'hello';
    // main.list = [];
    // main.person = {
    //     "name": "",
    //     "bio": "",
    //     "book": "",
    //     "library": ""
    // };
    main.name = "";
    main.bio = "";
    main.book = "";
    main.library = "";

    main.submit = function() {
            console.log("This is working");
            main.name = "";
            main.bio = "";
            main.book = "";
            main.library = "";
        }
        // main.submit = function() {
        //     if (main.text) {
        //         main.list.push(main.text);
        //         main.text = "";
        //
        //     };
        // };
}
