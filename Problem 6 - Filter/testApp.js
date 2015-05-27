var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

(function(){
    // Suppose we need to filter odd elements
    var array = [0, 1, 2, -1, 4, 6, -55, 0];

    console.log("Initial array: " + array.toString());

    if (iTechArt.training.utils.filter){
        var isOdd = function(number) { return number % 2 !== 0; };
        var resultArray = iTechArt.training.utils.filter(array, isOdd);
        console.log("Result array: " + resultArray.toString());
    }
})();