var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

/**
 *  Implement linear fold function that works on array:
 *
 *      F (array, callback [, initialValue]),
 *
 *  callback: function to execute on each value in the array, taking four arguments:
 *      - previousValue: the value previously returned in the last invocation of the callback, or initialValue, if supplied
 *      - currentValue: the current element being processed in the array
 *      - index: the index of the current element being processed in the array
 *      - array: the array fold was called upon
 *
 *  initialValue: object to use as the first argument to the first call of the callback
 */


iTechArt.training.utils.linearFold = function(array, callback, initialValue){
    var arrayLength = array.length;
    var fieldIndex = 0;

    var lastComputedValue;
    if (arguments.length > 2){
        // initialValue is specified
        lastComputedValue = initialValue;
    }
    else{
        // callback may proceed incorrectly if previous is undefined
        // so let's find the first element in array and skip it's processing
        if (arrayLength == 0) {
            // empty array
            throw Error("Empty array was specified as the first argument");
        }
        while (fieldIndex < arrayLength){
            if (fieldIndex in array){
                lastComputedValue = array[fieldIndex];
                fieldIndex += 1;
                break;
            }
            else { fieldIndex++; }
        }
        if (fieldIndex == arrayLength) {
            throw TypeError();
        }
    }

    for (var i = fieldIndex; i < arrayLength; i++){
        if (i in array){
            lastComputedValue = callback.call(null, lastComputedValue, array[i], i, array);
        }
    }

    return lastComputedValue;
}