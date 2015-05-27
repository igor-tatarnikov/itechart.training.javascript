var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

/**
 *  Implement a function that filters array based on callback result
 */


iTechArt.training.utils.filter = function(array, fn) {
    var resultArray = [];
    for (var i = 0, arrayLength = array.length; i < arrayLength; i++){
        if (i in array){
            // according to original filter function, it is a known practice
            // to pass following parameters to fn:
            //   - element
            //   - index
            //   - array
            if (fn.call(null, array[i], i, array)){
                resultArray.push(array[i]);
            }
        }
    }
    return resultArray;
}