var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

/*
 * Given array of numbers, find average of even ones using functions implemented for previous problems
 *
 * Example: (1, 23, 2, 6, 12, 0_ -> (2 + 6 + 12 + 0) / 4 = 5
 */

(function(){
    var array = [1, 23, 2, 6, 12, 0];
    console.log("Array: " + array.toString());
    var isEven = function(number) { return number % 2 === 0; };
    var sum = function(a, b){ return a + b; };

    if (iTechArt.training.utils.linearFold &&
        iTechArt.training.utils.filter){
        var filteredElements = iTechArt.training.utils.filter(array, isEven);
        console.log("Even numbers: " + filteredElements.toString());
        var totalSum = iTechArt.training.utils.linearFold(filteredElements, sum, 0);
        console.log("Average of even elements - " + totalSum / filteredElements.length);
    }
})();