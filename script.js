var map = L.map('map').setView([12.8797, 121.7740], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var locations = {
    "philippines": [13.41, 122.56],
    "taiwan": [23.697809, 120.960518],
    "manila": [14.5995, 120.9842],
    "iloilo": [10.7202, 122.5621],
    "cebu city": [10.3157, 123.8854]

};

document.getElementById("addLocationButton").addEventListener("click", function () {
    var locationName = document.getElementById("locationInput").value.toLowerCase();

    if (locations[locationName]) {
        L.marker(locations[locationName]).addTo(map)
            .bindPopup(locationName.charAt(0).toUpperCase() + locationName.slice(1))
            .openPopup();
    } else {
        alert("Location not found. Try 'Manila' or 'Iloilo'.");
    }
});