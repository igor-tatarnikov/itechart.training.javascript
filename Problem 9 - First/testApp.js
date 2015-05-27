var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

(function(){
    var array = [1, 3, 2, 9, -4];
    console.log("Array: " + array.toString());

    var isEven = function(number){
        // add logging to check that searching will stop, when
        // first array element that satisfies given condition
        // is found
        console.log("isEven was called against " + number);
        return number % 2 === 0;
    };
    var isZero = function(number){
        // add logging to check that searching will stop, when
        // first array element that satisfies given condition
        // is found
        console.log("isZero was called against " + number);
        return number === 0;
    };

    if (iTechArt.training.utils.first){
        console.log("First even element - " + iTechArt.training.utils.first(array, isEven));
        console.log("First zero element - " + iTechArt.training.utils.first(array, isZero));
    }
})();