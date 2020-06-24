const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const winston = require("./config/winston");
const swaggerUi = require("swagger-ui-express");

const YAML = require("yamljs");
const apiDocument = YAML.load("src/service-openapi.yaml");

const userRouter = require("./routes/user");
const storeRouter = require("./routes/store");
const staffRouter = require("./routes/staff");
const serviceRouter = require("./routes/service");

class App {
    constructor() {
        this.express = express();
        this.database();
        this.middlewares();
        this.routes();
    }

    database() {

    }

    middlewares() {
        this.express.use(morgan("combined", { stream: winston.stream }));
        this.express.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
        this.express.use(bodyParser.json()); // for parsing application/json
    }

    routes() {
        this.express.get("/", (req, res) => {
            res.send("Hello World!");
        });

        this.express.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocument));
        this.express.use("/users", userRouter);
        this.express.use("/stores", storeRouter);
        this.express.use("/staffs", staffRouter);
        this.express.use("/services", serviceRouter);       
    }
}

module.exports = new App().express;