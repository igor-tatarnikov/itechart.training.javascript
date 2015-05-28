var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

(function(){
    function summarize(){
        var sum = 0;
        for (var i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
    }

    // Default invocation
    console.log(summarize(1));
    console.log(summarize(1, 2));
    console.log(summarize(1, 2, 5));

    if (iTechArt.training.utils.partial) {
        var partial = iTechArt.training.utils.partial;

        // Partial invocation
        var summarizeWithOne = partial(summarize, 1);
        console.log(summarizeWithOne());
        console.log(summarizeWithOne(2));
        console.log(summarizeWithOne(2, 5));

        // Another form of partial invocation
        console.log(partial(summarize, 1)());
        console.log(partial(summarize, 1)(2));
        console.log(partial(summarize, 1)(2, 5));
    }
})();