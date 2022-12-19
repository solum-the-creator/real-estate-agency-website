var coordLen = document.getElementById('map').dataset.mapLen;
var coordWidth = document.getElementById('map').dataset.mapWidth;
var mapLocation = new google.maps.LatLng(coordLen, coordWidth);
var marker;
var map;
function initialize() {
    var mapOptions = {
        zoom: 15,
        center: mapLocation,
        scrollwheel: false,
        styles: [
            {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},
            {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
            {"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#f6954d"}]},
            {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#e3e2e2"}]},
            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"water","elementType":"all","stylers":[{"color":"#a4c4c8"},{"visibility":"on"}]}]
    };
    
    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

    marker = new google.maps.Marker({
        map: map,
        draggable: false,
        position: mapLocation
    });




}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

