var connect = require('connect');
var history = require('connect-history-api-fallback');
var serveStatic = require('serve-static');

const port = process.env.port || 3002;

try {
  connect()
  .use(history())
  .use(serveStatic(__dirname+'/dist'))
  .listen(port, () =>
    console.log(`Boom, app is running on port ${port}`)
  );
} catch(error) {
  console.log('Something fucked up', error);
}
