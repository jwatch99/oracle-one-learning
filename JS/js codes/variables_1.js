/* Javascript provides 7 different data types: undefined, null, boolean, string, symbol, number and object
undefined: variable that has not be set, while null is a set variable to be nothing.
symbol: immutable primitive value that is unique
variables are dynamic
*/
(function (){
    var myName ; // there are three ways to create a variable, var is the oldest
    // the variable myName would be of type "undefined"

    let ourName = "freeCodeCamp"; // only be able to used in the scope where you declare at
    const pi = "3.1415"; // a value that is not supposed to change

    // semicolon is recommended for better code readability

    // to assign a variable you use the = sign
    myName = "José"; // No need to use `var` again as variable has been declared

    // You can concatenate strings with the `+` sign
    myName = myName + " Emilio";

    console.log(myName); // Use to output to the JS console, for now we use return


    return myName;
})();