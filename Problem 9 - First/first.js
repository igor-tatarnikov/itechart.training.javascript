var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

/**
 *  Implement a function that returns the first element in array that satisfies given condition
 */


iTechArt.training.utils.first = function(array, fn) {
    for (var i = 0, arrayLength = array.length; i < arrayLength; i++){
        if (i in array){
            if (fn.call(null, array[i], i, array)){
                return array[i];
            }
        }
    }
    return null;
}