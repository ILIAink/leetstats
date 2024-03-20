//diff syntax for esm
var http = require('http');

var test = '';
const options = {
    hostname: 'leetcode.com',
    path: '/graphql/sealeeee',
    port: 80,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
var request = http.get(options, (resp) =>
{
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    })

    resp.on('end', () => {
        test = data;
        console.log(data);
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
  });

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(test);
    res.end();
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});