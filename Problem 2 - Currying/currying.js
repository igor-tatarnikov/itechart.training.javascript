/**
 *  Implement function curry that allows to do currying like:
 *
 *  f(x, y, z) = N,
 *  curry(f) = x -> (y -> (z -> N))
 *
 *  Function f may accept any number of explicit parameters.
 *  Implicit parameters are not subject to curry.
 *
 *  How does it differ from Partial Application?
 */

(function(){
    function curry(fn){
        var parametersCount = fn.length;

        function getCurriedFunction(params){
            return function(arg){
                var args = params.concat(arg);
                if (args.length < parametersCount){
                    return getCurriedFunction(params);
                } else {
                    return fn.apply(args);
                }
            };
        }

        return getCurriedFunction([]);
    }

    
})();