var app = require('./server-config.js');

// App will be able to be run both locally and when deployed; using below will create redundant system
var port = process.env.PORT || 4568;

app.listen(port);

console.log('Server now listening on port: ' + port);
