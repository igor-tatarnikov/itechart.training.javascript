var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

(function(){
    var sum = function (x, y, z) {
        console.log("sum was called");
        return x + y + z;
    };

    if (iTechArt.training.utils.lazy) {
        console.log("Creating lazy function..");
        var lazySum = iTechArt.training.utils.lazy([4, 1, 9], sum);
        console.log("Invoking lazy result..");
        console.log(lazySum());

        console.log("Invoking lazy result..");
        console.log(lazySum());
    }
})();