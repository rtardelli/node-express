const options = {};

if(process.env.NODE_ENV == "local") {
    options.repository = require("../database/localStorage");
}
module.exports = options;