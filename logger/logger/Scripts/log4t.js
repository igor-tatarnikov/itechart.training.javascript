/**
 * Custom JavaScript logger developed in terms of iTechArt JavaScript training. May-June 2015
*/

var log4t;

(function () {
    'use strict';

    var logMessagesSeparator = '\r\n';

    function Log4t() { };
    log4t = new Log4t();

    //#region Common logic
    function getExceptionMessage(ex) {
        if (ex.message) {
            return ex.message;
        } else if (ex.description) {
            return ex.description;
        } else {
            return String(ex);
        }
    }

    function getExceptionString(ex) {
        if (ex) {
            var exStr = "Exception: " + getExceptionMessage(ex);
            if (ex.stack) {
                exStr += logMessagesSeparator + "Stack trace:" + logMessagesSeparator + ex.stack;
            }
            return exStr;
        }
        return null;
    }
    //#endregion

    //#region Logging Levels
    var Level = function (levelValue, levelName) {
        this.level = levelValue;
        this.name = levelName;
    };

    Level.prototype = {
        toString: function () {
            return this.name;
        },
        equals: function (level) {
            return this.level == level.level;
        },
        isGreaterOrEqual: function (level) {
            return this.level >= level.level;
        }
    };

    Level.ALL = new Level(Number.MIN_VALUE, 'ALL');
    Level.TRACE = new Level(1, 'TRACE');
    Level.DEBUG = new Level(2, 'DEBUG');
    Level.INFO = new Level(3, 'INFO');
    Level.WARNING = new Level(4, 'WARNING');
    Level.ERROR = new Level(5, 'ERROR');
    Level.FATAL = new Level(6, 'FATAL');

    log4t.Level = Level;
    //#endregion

    //#region Logger
    function Logger() {
        var logLevel = Level.ALL;
        var publishers = [];

        this.log = function (level, params) {
            if (level.isGreaterOrEqual(this.getLevel())) {
                var exception;
                var lastArgumentIndex = params.length - 1;
                var lastArgument = params[lastArgumentIndex];
                if (params.length > 1 && lastArgument instanceof Error) {
                    exception = lastArgument;
                    lastArgumentIndex--;
                }

                var messages = [];
                for (var i = 0; i <= lastArgumentIndex; i++) {
                    messages[i] = params[i];
                }

                var eventObject = new LogObject(new Date(), level, messages, exception);

                for (var i = 0, publishersCount = publishers.length; i < publishersCount; i++) {
                    try {
                        var currentPublisher = publishers[i];
                        if (currentPublisher.process) {
                            currentPublisher.process(eventObject);
                        }
                    } catch (error) {
                        //TODO: Add error processing
                    }
                }
            }
        };

        this.setLevel = function (newLevel) {
            logLevel = newLevel;
        };

        this.getLevel = function () {
            return logLevel;
        };

        this.addPublisher = function (publisher) {
            if (publisher) {
                publishers.push(publisher);
            }
        };
    };

    Logger.prototype = {
        logTrace: function () {
            this.log(Level.TRACE, arguments);
        },
        logDebug: function () {
            this.log(Level.DEBUG, arguments);
        },
        logInfo: function () {
            this.log(Level.INFO, arguments);
        },
        logWarning: function () {
            this.log(Level.WARNING, arguments);
        },
        logError: function () {
            this.log(Level.ERROR, arguments);
        },
        logFatal: function () {
            this.log(Level.FATAL, arguments);
        }
    };
    //#endregion

    //#region LogObject
    var LogObject = function (timeStamp, level, messages, exception) {
        this.timeStamp = timeStamp;
        this.level = level;
        this.messages = messages;
        this.exception = exception;
    };

    LogObject.prototype = {
        getMessagesString: function () {
            if (this.messages.length === 1) {
                return this.messages[0];
            }
            return this.messages.join(logMessagesSeparator);
        },
        toString: function () {
            var result = this.timeStamp.toString() + ' ' + this.level.toString() + ' - ' + this.getMessagesString();
            if (this.exception) {
                result = result + logMessagesSeparator + getExceptionString(this.exception);
            }
            return result;
        },
        getJson: function () {
            return JSON.stringify(this);
        }
    };

    log4t.LogObject = LogObject;
    //#endregion

    //#region Publishers
    //#region Console Publisher
    var ConsolePublisher = function () {
        var isEnabled = true;

        function isConsoleDefined() {
            return console && console.log;
        };

        function print(message) {
            if (isConsoleDefined()) {
                console.log(message);
            }
        };

        this.setEnabled = function (enabled) {
            isEnabled = Boolean(enabled);
        };

        this.process = function (logObject) {
            if (isEnabled && logObject && logObject instanceof LogObject) {
                print(logObject.toString());
            }
        };
    };

    log4t.ConsolePublisher = ConsolePublisher;
    //#endregion

    //#region Alert Publisher
    var AlertPublisher = function () {
        var isEnabled = true;

        function show(message) {
            alert(message);
        };

        this.setEnabled = function (enabled) {
            isEnabled = Boolean(enabled);
        };

        this.process = function (logObject) {
            if (isEnabled && logObject && logObject instanceof LogObject) {
                show(logObject.toString());
            }
        };
    };

    log4t.AlertPublisher = AlertPublisher;
    //#endregion

    //#region 'WebAPI' Publisher
    var RequestPublisher = function (url) {
        this.url = url;
        this.process = function (logObject) {
            if (logObject && logObject instanceof LogObject) {
                var xhr = new XMLHttpRequest();

                xhr.open("POST", this.url, true);
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                var formData = logObject.getJson();
                xhr.send(formData);
            }
        };
    };

    log4t.RequestPublisher = RequestPublisher;
    //#endregion
    //#endregion

    var defaultLogger = null;
    log4t.getDefaultLogger = function () {
        if (!defaultLogger) {
            defaultLogger = new Logger();
        }
        return defaultLogger;
    };

    log4t.getLogger = log4t.getDefaultLogger;

    window.log4t = log4t;
})();