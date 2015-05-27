var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

/*
 * Get the sum of 10 random numbers using functions implemented for previous problems
 */

(function(){
    if (iTechArt.training.utils.linearFold &&
        iTechArt.training.utils.linearUnfold){
        var arrayLength = 10;
        var getNextNumber = function() { return Math.random(); };
        var callback = function(state){
            if (state.index <= arrayLength){
                var nextNumber = getNextNumber();
                return {
                    state: {
                        index: state.index + 1
                    },
                    value: nextNumber
                };
            }
            return null;
        };
        var initialState = {
            index: 1
        };

        var randomArray = iTechArt.training.utils.linearUnfold(callback, initialState);
        console.log("Array: " + randomArray.toString());
        console.log("Sum: " + iTechArt.training.utils.linearFold(randomArray,
            function(a, b){ return a + b;},
            0));
    }
})();