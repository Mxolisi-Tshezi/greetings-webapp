const assert = require('assert');
const Greeting = require('../greet-functions');


describe("The Greeting massages", function () {

    it("should greet the name in English if name is entered and the selected language is english", function () {
        let greetmessage = Greeting();

        assert.deepEqual("Hello, Mxolisi",greetmessage.message("Mxolisi", "english"))
    });

   

    it("should greet the name in isiXhosa if the name is entered and the language is isixhosa", function () {
        let greetmessage= Greeting();

        assert.deepEqual("Molo, Mxo",greetmessage.message("Mxo", "isixhosa"))
    });

    it("should greet the name in isiZulu if the name is entered and the language is isiZulu", function () {
        let greetmessage= Greeting();

        assert.deepEqual("Sawubona, Jack", greetmessage.message("Jack", "isiZulu"))
    });


    it('it should return Name not entered', function () {
        let greetmessage = Greeting();
        assert.deepEqual("Name not entered",greetmessage.errorMessage("","english"))
    });


    it('it should return language not selected', function () {
        let greetmessage = Greeting();
        assert.deepEqual("language not selected", greetmessage.errorMessage("Young", ""))
    });


    it('should warn user if the name and the lanuge is not passed', function () {
        let greetmessage = Greeting();
        assert.deepEqual("Please enter your name and select language",greetmessage.errorMessage("",""))
    });


})