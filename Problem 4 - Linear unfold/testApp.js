var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

(function(){
    // Let's say we want to print out first ten Fibonacci numbers
    console.log("#1 - 1");
    console.log("#2 - 1");


    var countOfFibonacciNumbersToPrint = 20;
    var getNextFibonacciNumber = function(preValue, value) { return preValue + value; };
    var callback = function(state){
        if (state.index <= countOfFibonacciNumbersToPrint){
            var nextFibonacciNumber = getNextFibonacciNumber(state.preValue, state.value);
            console.log("#" + state.index + " - " + nextFibonacciNumber);
            return {
                state: {
                    index: state.index + 1,
                    preValue: state.value,
                    value: nextFibonacciNumber
                },
                value: nextFibonacciNumber
            };
        }
        return null;
    };
    var initialState = {
        index: 3,
        preValue: 1,
        value: 1
    };

    if (iTechArt.training.utils.linearUnfold){
        iTechArt.training.utils.linearUnfold(callback, initialState);
    }

})();