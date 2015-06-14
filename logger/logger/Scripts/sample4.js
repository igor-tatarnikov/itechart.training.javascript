(function () {
    var serverUrl = 'http://localhost:53440/Values/Post';

    var logger = new log4t.getLogger();
    var requestPublisher = new log4t.RequestPublisher(serverUrl);
    logger.addPublisher(requestPublisher);

    logger.logWarning("The system is operating very slow.");
})();