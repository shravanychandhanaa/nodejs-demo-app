const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from a CI/CD pipeline!');
});

// Export the app instance so it can be imported by other modules (like tests)
module.exports = app;

// Start the server only if this file is run directly (not imported as a module)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Demo app listening at http://localhost:${port}`);
  });
}
