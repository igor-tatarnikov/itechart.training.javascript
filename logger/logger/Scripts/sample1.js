(function () {
    var logger = new log4t.getLogger();
    var consolePublisher = new log4t.ConsolePublisher();
    logger.addPublisher(consolePublisher);
    logger.logTrace('test message with Trace level');
})();