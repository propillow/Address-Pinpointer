
var map;
var GeoCoder;

function myMap() {
    GeoCoder = new google.maps.Geocoder();

    var mapProp = {
        center: new google.maps.LatLng(49.281819, -123.121449),
        zoom: 10,
    };
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

}

function loadScript(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBPvSZn_FPa1WKovWTsoonndF5hb1sU89o&' + 'callback=myMap';

    document.body.appendChild(script);
}

window.onload = loadScript;


$("#Submit").click(function(){

    var address = $("#address").val();
    //console.log(address);

    GeoCoder.geocode( { 'address': address }, function(results, status) {
        if (status == 'OK') {
            //console.log(results);
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                animation: google.maps.Animation.BOUNCE
            });
        } else {
            alert('Geocode was not successful: ' + status);
        }
    });

});
