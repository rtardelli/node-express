const express = require("express");
const morgan = require("morgan");
const fs = require('fs');
const path = require('path')
const swaggerUi = require("swagger-ui-express");

const YAML = require("yamljs");
const apiDocument = YAML.load("src/service-openapi.yaml");

const userRouter = require("./routes/user");

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
        const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" })
        this.express.use(morgan("combined", { stream: accessLogStream }))
    }

    routes() {
        this.express.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocument));
        this.express.use("/users", userRouter);

        this.express.get("/", (req, res) => {
            res.send("Hello World!");
        });
    }
}

module.exports = new App().express;