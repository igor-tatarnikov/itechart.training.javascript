var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

/**
 *  Implement a function that takes list of parameters and makes any given function lazy
 */


iTechArt.training.utils.lazy = function(args, fn) {
    return function(){
        return fn.apply(null, args);
    };
};