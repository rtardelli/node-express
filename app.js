const express = require("express");
const app = express();
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");

const YAML = require("yamljs");
const apiDocument = YAML.load("./service-openapi.yaml");

const userRouter = require("./routes/user");

const port = process.env.PORT || 3000;

// Middleware
app.use(morgan("combined"));

// Routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocument));
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("That is working on port " + port);
});