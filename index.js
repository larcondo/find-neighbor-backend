const server = require('./app');

const PORT = 3002;

server.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}...`);
});