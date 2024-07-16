(function(){
    // You can use bracket notation to, for example, treat a string as an array of characters
    var string = "Sample String";
    // strings are immutable, so changing a single character is not possible
    // string[2] = 'a'; this is invalid
    var number = 2; 
    // arrays are 0-indexed
    // brackets accept an integer number as argument, whether it comes from a constant, expression or variable
    return string[number]; 
})();