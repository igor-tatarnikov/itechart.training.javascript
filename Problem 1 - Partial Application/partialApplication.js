/**
 * Implement function F that allows to do partial function application in form of:
 *
 *   G(x, y, z...) = N
 *
 *   F(x, G(x, y, z...)) -> H(y, z) = N
 *
 * F should accept any number of parameters to apply.
 * G may accept any number of parameters.
 *
 * Is there any JavaScript built-in alternative?
 */

(function(){
    // 'partial' -> F function
    function partial(fn /* fn -> G function */){
        //Convert arguments to an array; skip the first argument
        var args = Array.prototype.slice.call(arguments, 1);

        // following function corresponds to H function in the task description
        return function(){
            //Call original function passing in original parameters followed by newly specified ones
            return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
        }
    }

    // A sample of G function
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

    // Partial invocation
    var summarizeWithOne = partial(summarize, 1);
    console.log(summarizeWithOne());
    console.log(summarizeWithOne(2));
    console.log(summarizeWithOne(2, 5));
})();