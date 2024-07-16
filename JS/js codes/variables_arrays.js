(function(){
    // You can create arrays using brackets to indicate the data inside that will be contained
    // you must separate the objects with a comma
    var my_array = [1, 2, "three"]; // array with two numbers and a string
    // indexes of the values would be 0, 1, 2 for 1, 2 and "three" respectively
    // Arrays are mutable  
    my_array[3] = [[3, 4, 5]]; // You can nest arrays
    return my_array[3][0][2]; // to access an nested element, you need to include a second bracket for each level
})();