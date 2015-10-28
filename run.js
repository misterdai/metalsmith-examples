if (process.argv.length <= 2) {
  console.log('Enter the example to run.');
  process.exit(1);
}

const static = require('node-static');

const fileServer = new static.Server(`./${process.argv[2]}/build`,
  {cache: false}
);

require('http').createServer((request, response) => {
  request.addListener('end', () => {
    fileServer.serve(request, response, (err, result) => {
      if (!err) return;
      response.writeHead(err.status, err.headers);
      response.end('Not Found');
    });
  }).resume();
}).listen(8080);

require('./' + process.argv[2]);
