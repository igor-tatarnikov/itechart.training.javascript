var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

/**
 *  Implement function curry that allows to do currying like:
 *
 *  f(x, y, z) = N,
 *  curry(f) = x -> (y -> (z -> N))
 *
 *  Function f may accept any number of explicit parameters.
 *  Implicit parameters are not subject to curry.
 */


iTechArt.training.utils.curry = function(fn){
    // Store the value in closure
    var parametersCount = fn.length;

    function getCurriedFunction(params){ // params here is the array of arguments already specified for the original function
        return function(arg){
            // Add just specified parameter value to the array
            var args = params.concat(arg);

            if (args.length < parametersCount){
                // Keep currying
                return getCurriedFunction(args);
            } else {
                // All parameters were provided. It's time to invoke the original function
                return fn.apply(this, args);
            }
        };
    }

    return getCurriedFunction([]);
};