//API

var API_KEY = "pk.eyJ1IjoiamVubmlzbWFyaWUiLCJhIjoiY2s2aXZhdDlxMDU3azNqdHJvcmRhcm95ZyJ9.0anVb3yDJRZiqu7rapW8Jg";
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 75,
  id: "mapbox.light",
  accessToken: API_KEY
});

// create map TEST 
//var newMap = L.map('map').setView([18.2208, -66.5901], 13);
//L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//attribution: '&copy; <a href=”http://osm.org/copyright”>OpenStreetMap</a> contributors'
//}).addTo(newMap);

////var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"



var casesData = 
{
    "type": "FeatureCollection",
    "features": [
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -66.1653,18.3894 ]
     },
     "properties": {
     "Region":"Bayamón",
     "F":0,
     "M":1,
     "Total":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -66.0352,18.2388 ]
     },
     "properties": {
     "Region":"Caguas",
     "F":1,
     "M":0,
     "Total":1
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -67.1452,18.2013 ]
     },
     "properties": {
     "Region":"Mayagüez",
     "F":2,
     "M":4,
     "Total":6
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -66.1057,18.4655 ]
     },
     "properties": {
     "Region":"Metro",
     "F":4,
     "M":18,
     "Total":22
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -66.6141,18.0111 ]
     },
     "properties": {
     "Region":"Ponce",
     "F":1,
     "M":0,
     "Total":1
     }
   }
 ]
 };

   
 function markerSize(Total) {
    return Total * 1000;
  }
  
  function markerColor(Total) {
    if (Total <= 10) {
        return "#F2FDA1";
    } else if (Total <= 20) {
        return "#5FCFD1";
    } else if (Total <= 30) {
        return "#843699";
    } else if (Total <= 40) {
        return "#CC6456";
    } else if (Total <= 50) {
        return "#FF2872";
    } else {
        return "#3ED145";
    };
  }



function createFeatures(casesData) {

  var cases = L.geoJSON(casesData, {
  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup descrption
 onEachFeature : function (feature, layer) {

    layer.bindPopup("<h3>" + feature.properties.Region +
      "</h3><hr><p>" + "<p> F: " + (feature.properties.F) + "</p>" + "<p> M: " + (feature.properties.M) + "</p>" + "<p> Total: " +  feature.properties.Total + "</p>")
    },     pointToLayer: function (feature, latlng) {
      return new L.circle(latlng,
        {radius: markerSize(feature.properties.Total),
        fillColor: markerColor(feature.properties.Total),
        fillOpacity: 1,
        stroke: false,
    })
  }
  });
    


  // Sending our earthquakes layer to the createMap function
  createMap(cases);
}

function createMap(cases) {

  // Define satelitemap and darkmap layers
  var satelitemap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 75,
    id: "mapbox.satellite",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 75,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Satelite Map": satelitemap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    casesData: cases
  };

  // Create our map, giving it the satelitemap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [18.2208, -66.5901],
    zoom: 3,
    layers: [satelitemap, cases]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
 
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function () {
  
      var div = L.DomUtil.create('div', 'info legend'),
          Totals = [0, 10, 20, 30, 40, 50];
  
      for (var i = 0; i < Totals.length; i++) {
          div.innerHTML +=
              '<i style="background:' + markerColor(Totals[i] + 1) + 
              '"></i> ' + Totals[i] + (Totals[i + 1] ?
                ' - ' + Totals[i + 1] + 
                '<br>' : ' + ');
      }
  
      return div;
  };
  
  legend.addTo(myMap);

}
