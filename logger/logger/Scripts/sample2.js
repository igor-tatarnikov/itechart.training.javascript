(function () {
    var logger = new log4t.getLogger();
    var consolePublisher = new log4t.ConsolePublisher();
    logger.addPublisher(consolePublisher);
    var alertPublisher = new log4t.AlertPublisher();
    logger.addPublisher(alertPublisher);
    logger.logInfo('test message with Info level');
})();