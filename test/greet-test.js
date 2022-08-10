const assert = require('assert');

const Greet = require('../greetings');

describe("The Greeting massages", function () {

    it("should display (Hello, name) if the name is entered and the selected language is english", function () {

        const greetedName = Greet()
        assert.equal("Hello, Mxo", greetedName.getLanguage("Mxo", "english"))

    });
    it("should display (Molo, name) if the name is entered and the language is isixhosa", function () {

        const greetedName = Greet()
        assert.equal("Molo, Mxo", greetedName.getLanguage("Mxo", "isixhosa"))

    });
    it("should display (Dumela, name) if the language is selected ", function () {

        const greetedName = Greet()
        assert.equal("Sawubona, Mxo", greetedName.getLanguage("Mxo", "isiZulu"))

    });


});
describe("Please Select language massages",function(){

    it("should display (please select languge) if the name is passed and the lanuge is not passed",function(){

        const greetedName = Greet()
        assert.equal("Please select a language",greetedName.errorMessage("Mxo" ,"") )

    });
   
});

describe("The invelid massages",function(){

    it("should display (please enter a valid name) if the is no name given",function(){

        const greetedName = Greet()
        assert.equal("Please enter your name",greetedName.errorMessage("","english") )

    });
   
});
describe("The invelid massages",function(){

    it("should display (please Enter Name and language) if the is no name passed and no languge selected",function(){

        const greetedName = Greet()
        assert.equal("Please select a language",greetedName.errorMessage(" ","") )

    });
   
});


