const appRoot = require('app-root-path');
const winston = require('winston');

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  exitOnError: false,
  transports: [
    new winston.transports.Console(),
    // - Write all logs with level `error` and below to `error.log`
    new winston.transports.File({ 
      filename: `${appRoot}/logs/error.log`, 
      level: 'error',
      maxSize: 5242880, // 5MB,
      maxFiles: 2,
    }),
    // - Write all logs with level `info` and below to `combined.log`
    new winston.transports.File({ 
      filename: `${appRoot}/logs/combined.log`,
      maxSize: 5242880, // 5MB,
      maxFiles: 2,
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ 
      filename: `${appRoot}/logs/exceptions.log` 
  }),
  ]
});

// create a stream object with a 'write' function that will be used by 'morgan'
logger.stream = {
  write: (message, encoding) => {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

console.log("wiston file")

module.exports = logger;