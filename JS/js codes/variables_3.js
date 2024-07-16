(function(){

    // You can use different quotation marks to define a string
    var string_1 = "First Name, " + `Middle Name` + 'Last Name';
    var string_2 = " Escape sequences are similar as in C \"";
    // It is preferable to use different types of quotes rather than using more escape sequences
    string_2 = '"""""""""""""';
    string_1+=string_2; // You can use this types of operators to concatenate;
    return string_1 + "Length is: " + string_1.length; // variables have different properties depending on the type of datatype, like length for str.
})();