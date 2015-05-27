var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

(function(){
    var data = [1, 3, -2, 5, 0];

    // Suppose we should calculate the average value among array element values

    // Default approach
    var total = 0;
    for (var i = 0, arrayLength = data.length; i < arrayLength; i++){
        total += data[i];
    }
    console.log(total / data.length);

    // The same operation is performed using linearFold function
    if (iTechArt.training.utils.linearFold){
        var sumFunc = function(a, b) { return a + b; };
        var arraySum = iTechArt.training.utils.linearFold(data, sumFunc, 0);
        console.log(arraySum / data.length);


        // Another test
        var printParams = function(prev, value, index, array){
            var textLine = 'Array[' + index + '] = ' + value + '; previous value - ' + prev + '; array - ' + array.toString();
            console.log(textLine);
            return textLine;
        }
        var stringArray = ["Steven", "Mike", "Corben", "Nancy"];

        // No initialValue is specified, so first array will be skipped and not processed by the callback function
        console.log(iTechArt.training.utils.linearFold(stringArray, printParams));
    }
})();
