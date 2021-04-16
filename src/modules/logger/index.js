const log4js = require("log4js");

const trace = (moduleName, ...data) => {
    log4js.getLogger(moduleName).trace(data);
};

const debug = (moduleName, ...data) => {
    log4js.getLogger(moduleName).debug(data);
};

const info = (moduleName, ...data) => {
    log4js.getLogger(moduleName).info(data);
};

const warn = (moduleName, ...data) => {
    log4js.getLogger(moduleName).warn(data);
};

const error = (moduleName, ...data) => {
    log4js.getLogger(moduleName).error(data);
};

const fatal = (moduleName, ...data) => {
    log4js.getLogger(moduleName).fatal(data);
};

// Allow easy migration
const log = (moduleName, ...data) => {
    log4js.getLogger(moduleName).log(data);
};

module.exports = { trace, debug, info, warn, error, fatal, log };
