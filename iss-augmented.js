var issUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
var request = require('request');
var prompt = require('prompt');
var locationUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';


Number.prototype.toRadians = function() { // this creates a new tool for Number
    return this * Math.PI / 180;
};



function calcDistance(lat1, lat2, lon1, lon2) {
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2 - lat1).toRadians();
    var Δλ = (lon2 - lon1).toRadians();
    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    console.log('the distance between the International Space Station and your location is: ' + Math.floor(d) + ' meters.');
}

var askUser = function(issLatitude, issLongitude) {
     prompt.get('userLocation', function(err, answer) {
        if (err) {
            console.log('sorry, there was an error');
        }
        else {
            var placeUrl = locationUrl + answer.userLocation;
            request(placeUrl, function(err, location, body) {
                if (err) {
                    console.log('there was an error');
                }
                else {
                    var parseBody = JSON.parse(body);
                    var userLatitude = parseBody.results[0].geometry.location.lat;
                    var userLongitude = parseBody.results[0].geometry.location.lng;
                    // console.log('user latitude ' + userLatitude); //to check my user latitude
                    // console.log('user longitude ' + userLongitude); //to check my user longitude
                    calcDistance(issLatitude, userLatitude, issLongitude, userLongitude);

                }
            });
        }
    });
};


request(issUrl, function(err, location, body) {
    if (err) {
        console.log('there was an error');
    }
    else {
        var parseBody = JSON.parse(body);
        var issLatitude = parseBody.latitude;
        var issLongitude = parseBody.longitude;
        // console.log('iss latitude: ' + issLatitude); //to check my ISS latitude
        // console.log('iss longitude: ' + issLongitude); //to check my ISS longitude
        
        askUser(issLatitude, issLongitude);
    }
});

