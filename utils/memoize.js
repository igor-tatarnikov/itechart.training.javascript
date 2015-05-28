var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

/**
 *  Implement a function that for any given function F produces function G
 *  that caches its previous calling results.
 *
 *  Function F accept single explicit parameter.
 *  Implicit parameters should not be taken into account.
 *  Watch out for Nan, undefined and circular references.
 */


iTechArt.training.utils.memoize = function(fn) {
    var cache = {};

    return function(){
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        if (key in cache){
            return cache[key];
        }
        else {
            return cache[key] = fn.apply(this, arguments);
        }
    };
};