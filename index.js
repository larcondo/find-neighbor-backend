const app = require('./app');

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}...`);
});