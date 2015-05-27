var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};


/**
 * Implement function F that allows to do partial function application in form of:
 *
 *   G(x, y, z...) = N
 *
 *   F(x, G(x, y, z...)) -> H(y, z) = N
 *
 * F should accept any number of parameters to apply.
 * G may accept any number of parameters.
 */

iTechArt.training.utils.partial = function(fn /* fn -> G function */){
    //Convert arguments to an array; skip the first argument
    var args = Array.prototype.slice.call(arguments, 1);

    // following function corresponds to H function in the task description
    return function(){
        //Call original function passing in original parameters followed by newly specified ones
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
    }
};