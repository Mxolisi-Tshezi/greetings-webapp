module.exports = function Greeting() {
    let name = ''
    let language = ''
    var alphabets = /^[a-z A-Z]+$/;
    function setLanguage(lang) {
        language = lang
    }
    function setName(username) {
        name = username
    }
    function getName() {
        return name
    }
    function getLanguage() {
        return language
    }
    function message(name,language) {

        if (alphabets.test(name) == true) {

            if (language === 'english') {
                return 'Hello, ' + name
            }
            if (language === 'isixhosa') {
                return 'Molo, ' + name
            }

            if (language === 'isiZulu') {
                return 'Sawubona, ' + name
            }
        } else {
            // return 'Invalid Name format entered'
        }
    }

    function errorMessage(name, language) {

        if (!language && !name) {

            return "Please enter your name and select language"
        }

        else if (!name) {
            return "Name not entered"

        }

        else if (!language) {
            return "language not selected"
        }

    }
    return {
        setLanguage,
        getLanguage,
        setName,
        getName,
        errorMessage,
        message
    }

}