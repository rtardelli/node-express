const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

const YAML = require('yamljs');
const apiDocument = YAML.load('./service-openapi.yaml');

const userRouter = require('./routes/user');

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocument));
app.use("users", userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('That is working!');
});