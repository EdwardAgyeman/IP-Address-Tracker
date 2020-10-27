// ========================================Map Set Up========================================
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWRkaWNvZGVzIiwiYSI6ImNrZ3JyMmo1cTA0bjQyeW1uYXhzN3R5Z3MifQ.mBkRmRfBgRJx_GneLxPSnA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);



let userInput = document.querySelector("input");
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // add validation ip address format required using reg ex "Please enter valid IP" CSS hidden
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_nSwsJjV340Nc9JurI3BAWK8Lq5uJ9&ipAddress=${userInput.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let ipAddress = document.querySelector("#ip-address");
            let loCation = document.querySelector("#location");
            let timezone = document.querySelector("#timezone");
            // let utc = document.querySelector("#utc");
            let isp = document.querySelector("#isp");

            // pass data to the DOM Elements
            ipAddress.textContent = data.ip;
            loCation.textContent = data.location.city;
            timezone.textContent = data.location.timezone;
            isp.textContent = data.isp;

            mymap.setView([data.location.lat, data.location.lng], 13)
        })
        .catch(error => console.log("ERROR! Something went wrong!"))
})
console.log(mymap)
console.log(L)