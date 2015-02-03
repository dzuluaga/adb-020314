var express = require('express')
var app = express()
var request = require('request');

var options = {
    //url: 'https://api.github.com/repos/request/request',
    url: 'https://api.github.com/users',
    headers: {
        'User-Agent': 'request'
    }
};

app.get('/', function (req, res) {
	function callback(error, response, body) {
	    if (!error && response.statusCode == 200) {
	        var info = JSON.parse(body);
	        console.log(body);
	        //console.log(info.stargazers_count + " Stars");
	        //console.log(info.forks_count + " Forks");
	        res.json(body)
	    }
	}
  request(options, callback);
  //res.send('Hello World!')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})