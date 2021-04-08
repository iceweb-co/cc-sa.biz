/*
 * Charming - A front end framework built on top of Bootstrap 4 and jQuery 3.
 * Version v0.6.0
 * Copyright 2017 Alexander Rechsteiner
 * http://hackerthemes.com/charming
 */
// TODO: Needs to be refactored with data-toggle instead of IDs

$( document ).ready(function() {
  $(".dash-nav-toggler").click(function() {
    $("#dash-nav").toggleClass("show");
    $("#dash-app").toggleClass("hide");
  });

  try {
    var mymap = L.map("google-map").setView([24.66812, 46.70752], 15);
    mymap.scrollWheelZoom.disable();

    var mapLabel = document.getElementById('google-map')
      .getAttribute('data-map-label');
    var marker = L.marker([24.66812, 46.70752]).addTo(mymap);
    marker.bindPopup(mapLabel).openPopup();

    var apiUrl = "https://api.mapbox.com/styles/v1";
    var accessToken = 'pk.eyJ1IjoibXNhYWRhbnkiLCJhIjoiY2o2dXR1YmluMWZ3OTMzbGE5amw4MGVyYiJ9.qIqeHB55W07TZqjotPgwLQ';
    L.tileLayer(apiUrl + "/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      accessToken: accessToken,
    }).addTo(mymap);
  } catch(e) {};
});
