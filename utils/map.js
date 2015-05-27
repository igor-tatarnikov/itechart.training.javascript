var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

/**
 *  Implement a function that creates new array with the results of calling a provided function
 *  on every element in array
 */


iTechArt.training.utils.map = function(array, fn) {
    var resultArray = [];
    for (var i = 0, arrayLength = array.length; i < arrayLength; i++){
        if (i in array){
            // according to original map function it is a known practice
            // to pass following parameters to fn:
            //   - element
            //   - index
            //   - array
            resultArray[i] = fn.call(null, array[i], i, array);
        }
    }
    return resultArray;
}