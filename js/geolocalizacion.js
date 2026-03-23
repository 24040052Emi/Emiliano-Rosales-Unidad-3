function iniciarMapa() {

    if (!navigator.geolocation) {
        alert("Geolocalización no soportada");
        return;
    }

    navigator.geolocation.getCurrentPosition(function (pos) {

        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        let map = L.map('map').setView([lat, lon], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(map);

        L.marker([lat, lon])
        .addTo(map)
        .bindPopup("Tu ubicación")
        .openPopup();

    });
}

window.addEventListener("DOMContentLoaded", iniciarMapa);