const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

const YAML = require('yamljs');
const apiDocument = YAML.load('./service-openapi.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocument));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('That is working!');
});