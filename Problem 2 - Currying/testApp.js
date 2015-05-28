var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

(function(){
    // Test function
    function summarize(x1, x2, x3,x4, x5){
        var sum = 0;
        for (var i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
    }

    // Default invocation
    console.log(summarize(1, 2, 5, 10, 7));

    // Using curry function
    if (iTechArt.training.utils.curry) {
        var curriedSummarize = iTechArt.training.utils.curry(summarize);

        // No invocation happens, because there is not enough arguments
        console.log(curriedSummarize(1));

        // Correct invocation in currying manner
        console.log(curriedSummarize(1)(2)(5)(10)(7));
    }
})();