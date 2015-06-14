(function () {
    var logger = new log4t.getLogger();
    var consolePublisher = new log4t.ConsolePublisher();
    logger.addPublisher(consolePublisher);

    logger.logError("Exception processing test", new Error("Custom error"));
})();