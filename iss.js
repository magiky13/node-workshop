//e3
var url = 'http://api.open-notify.org/iss-now.json';
var request = require('request');

request(url, function(err, response, body) {
    if (err) {
        console.log('there was an error');
    }
    else {
        var parseBody = JSON.parse(body);
        console.log(parseBody.iss_position.latitude);
        console.log(parseBody.iss_position.longitude);
}
});
