const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require('fs');
const path = require('path')
const swaggerUi = require("swagger-ui-express");

const YAML = require("yamljs");
const apiDocument = YAML.load("src/service-openapi.yaml");

const userRouter = require("./routes/user");

const port = process.env.PORT || 3000;

// Middleware
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" })
 app.use(morgan("combined", { stream: accessLogStream }))

// Routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocument));
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("That is working on port " + port);
});
