var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

(function(){
    // Suppose we need to get absolute values of array elements
    var array = [0, 1, 2, -1, 4, 6, -55, 0];

    console.log("Initial array: " + array.toString());

    if (iTechArt.training.utils.map){
        var resultArray = iTechArt.training.utils.map(array, Math.abs);
        console.log("Result array: " + resultArray.toString());
    }
})();