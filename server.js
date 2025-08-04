const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from a CI/CD pipeline!');
});

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`);
});