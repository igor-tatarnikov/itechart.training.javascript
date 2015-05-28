var iTechArt = iTechArt || {};
iTechArt.training = iTechArt.training || {};
iTechArt.training.utils = iTechArt.training.utils || {};

(function(){
    var printMessage = function(message){
        var date = new Date();
        console.log(message + " was printed at " + date.toTimeString());
    };

    if (iTechArt.training.utils.memoize){
        var cachedPrintMessage = iTechArt.training.utils.memoize(printMessage);

        // This message is printed and cached
        cachedPrintMessage("Test");

        // None of this invocations will occure as the same argument is specified
        for (var i = 0; i < 10000000; i++){
            cachedPrintMessage("Test");
        }

        // This message is printed
        cachedPrintMessage("New test");
    }
})();