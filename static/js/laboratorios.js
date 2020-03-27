var API_KEY = "pk.eyJ1IjoiamVubmlzbWFyaWUiLCJhIjoiY2s2aXZhdDlxMDU3azNqdHJvcmRhcm95ZyJ9.0anVb3yDJRZiqu7rapW8Jg";
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 75,
  id: "mapbox.light",
  accessToken: API_KEY
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   id: 'mapbox.streets',
   accessToken: 'pk.eyJ1IjoidGhlYWNyb2NrZXR0IiwiYSI6ImNrMG42ZmI5ZzFlaXMzaXFvcnZ1MHp0MzcifQ.yGr6uZCm9ZVh3PMy_c1_kA'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng).addTo(map)
    .bindPopup("You are within " + radius + " meters from this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
  alert(e.message);
}

map.on('locationerror', onLocationError);

// var myLayer = L.geoJSON().addTo(map);
//   myLayer.addData(geoJsonFeature);

  var geojsonMarkerOptions = {
	radius: 8,
	fillColor: "#ff7800",
	color: "#000",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};
// start of data////////////////////////////////////////////////////////////////////////

var pharmacies = {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -65.72731686,18.3427045 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clinic Servi Lab",
    "ADDRESS":"Condominio Playa Azul G-2 Luquillo, PR 00773",
    "City":"Luquillo",
    "State":"PR",
    "zip code":"773",
    "Hours":"6:00 am- 5:00pm Lunes a viernes; 6:00am-1:30 pm SÃ¡bado",
    "Phone":"7878895730",
    "Fax":"7878898000"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -65.72731686,18.3427045 ]
    },
    "properties": {
    "Laboratorio":"Servi Lab Reference",
    "ADDRESS":"109 Calle Fernández García,",
    "City":"Luquillo",
    "State":"PR",
    "zip code":"773",
    "Hours":"6:00 am- 5:00pm Lunes a viernes; 6:00am-1:30 pm SÃ¡bado",
    "Phone":"7878896878",
    "Fax":"7878896879"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.70655425,18.41040132 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Rolón",
    "ADDRESS":"Carr.490 KM 0.2 Marginal Carr.129 Bo Hato Arriba",
    "City":"Arecibo",
    "State":"PR",
    "zip code":"612",
    "Hours":"6:30 am-5:00pm Lunes a Viernes, 7:00 am - 12:00pm SÃ¡bados",
    "Phone":"787-879-0749",
    "Fax":"787-816-4307"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.70655425,18.41040132 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Rolón",
    "ADDRESS":"Carr. 435 KM 0.2 Bo Dominguito, Sector El Green",
    "City":"Arecibo",
    "State":"PR",
    "zip code":"612",
    "Hours":"6:30 am-5:00pm Lunes a Viernes, 7:00 am - 12:00pm SÃ¡bados",
    "Phone":"787-879-1300",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.67496914,18.43369341 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Rolón",
    "ADDRESS":"Carr. 651 KM 2.5 Bo. Hato Arriba, Sector El Junco",
    "City":"Arecibo",
    "State":"PR",
    "zip code":"",
    "Hours":"6:30 am-5:00pm Lunes a Viernes, 7:00 am - 12:00pm SÃ¡bados",
    "Phone":"787-881-8989",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.70655425,18.41040132 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Rolón",
    "ADDRESS":"Ave. San Luis #993",
    "City":"Arecibo",
    "State":"PR",
    "zip code":"612",
    "Hours":"6:30 am-5:00pm Lunes a Viernes, 7:00 am - 12:00pm SÃ¡bados",
    "Phone":"787-680-7260",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.70655425,18.41040132 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Rolón",
    "ADDRESS":"Bo. Barrancas, Sector Los Mora",
    "City":"Arecibo",
    "State":"PR",
    "zip code":"612",
    "Hours":"6:30 am-5:00pm Lunes a Viernes, 7:00 am - 12:00pm SÃ¡bados",
    "Phone":"787-881-8989",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.32845997,18.30408673 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Corozal",
    "ADDRESS":"16 Calle Gandará",
    "City":"Corozal",
    "State":"PR",
    "zip code":"783",
    "Hours":"7:00am-3:30pm lunes a viernes 7:00am-12:00pm sÃ¡bado",
    "Phone":"787-859-2465",
    "Fax":"787-859-8072"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.32845997,18.30408673 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Corozal II",
    "ADDRESS":"Carr. 159 KM 15.3 Bo. Pueblo",
    "City":"Corozal",
    "State":"PR",
    "zip code":"783",
    "Hours":"7:00am-3:30pm lunes a viernes 7:00am-12:00pm sÃ¡bado",
    "Phone":"787-859-2465",
    "Fax":"787-859-4340"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.10122343,18.40607733 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Plaza Caparra Inc.",
    "ADDRESS":"1498 Avenida FD Rossevelt Plaza Caparra Shopping Center",
    "City":"Guaynabo",
    "State":"PR",
    "zip code":"968",
    "Hours":"7:00am-3:30pm lunes a viernes 7:00am-12:00pm sÃ¡bado",
    "Phone":"787-545-5024",
    "Fax":"787-308-4668"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.25223094,18.00099697 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Salimar",
    "ADDRESS":"12 Santiago Palmer",
    "City":"Salinas",
    "State":"PR",
    "zip code":"751",
    "Hours":"6:00am-4:00pm lunes a viernes 6:00am-12:00pm sÃ¡bado",
    "Phone":"787-824-2845",
    "Fax":"787-824-6921"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -65.75973292,18.23205425 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Medina",
    "ADDRESS":"43 Calle Juan R.Garzot",
    "City":"Naguabo",
    "State":"PR",
    "zip code":"718",
    "Hours":"6:00am-5:00pm lunes a viernes 6:00am-12:00pm sÃ¡bado",
    "Phone":"787-874-2802",
    "Fax":"787-874-0075"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.60725882,18.00272663 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico La Providencia",
    "ADDRESS":"1110 Calle Villa, Suite 102",
    "City":"Ponce",
    "State":"PR",
    "zip code":"728",
    "Hours":"6:00am-4:00pm lunes a viernes 7:00am-12:00pm sÃ¡bado",
    "Phone":"787-284-2113",
    "Fax":"787-284-1860"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -67.1456419,18.297128 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Jaimar",
    "ADDRESS":"Centro Comercial Filiberti Bo. Las Marías",
    "City":"Añasco",
    "State":"PR",
    "zip code":"",
    "Hours":"6:30am-3:00pm lunes a jueves 6:30am-2:30pm viernes 7:00am-11:00 am sÃ¡bado",
    "Phone":"787-826-4490",
    "Fax":"787-826-8255"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -67.151346,18.436149 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Jaimar II",
    "ADDRESS":"Carr. #110 KM 0.3 Bo Ceiba Baja Aguadilla, PR 00605",
    "City":"Aguadilla",
    "State":"PR",
    "zip code":"605",
    "Hours":"6:30am-3:00pm lunes a jueves 6:30am-2:30pm viernes 7:00am-11:00 am sÃ¡bado",
    "Phone":"787-891-2154",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -67.17627688,18.36225087 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Jersusalén",
    "ADDRESS":"Carretera 417 Km 3.0 Bo. Malapaso",
    "City":"Aguada",
    "State":"PR",
    "zip code":"602",
    "Hours":"6:30am-11:30am lunes a Viernes",
    "Phone":"787-868-4453",
    "Fax":"787-868-0780"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -67.41956606,18.15514852 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Jerusalén",
    "ADDRESS":"Carr. 348 Km 4.8 Barrio Malezas",
    "City":"Mayagüez",
    "State":"PR",
    "zip code":"680",
    "Hours":"6:30am-11:30am lunes a Viernes",
    "Phone":"787-832-8385",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -67.03729517,18.10998297 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico San Germeño Principal",
    "ADDRESS":"Calle Principal #9 Urb. El Retiro San Germán, PR 00683",
    "City":"San Germán",
    "State":"PR",
    "zip code":"683",
    "Hours":"7:00am-3:00pm lunes a viernes 7:00am-12:00pm sÃ¡bado",
    "Phone":"787-892-0635",
    "Fax":"787-892-7385"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.61325964,18.00334365 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Williams",
    "ADDRESS":"1128 Ave. Muñoz Rivera",
    "City":"Ponce",
    "State":"PR",
    "zip code":"00717-0643",
    "Hours":"6:00am-5:00pm lunes a viernes 7:00am-12:00pm sÃ¡bado",
    "Phone":"787-848-0405",
    "Fax":"787-290-3535"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.36102324,18.09699666 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Coamo",
    "ADDRESS":"129 Calle José I. Quinton Coamo, PR 00769",
    "City":"Coamo",
    "State":"PR",
    "zip code":"769",
    "Hours":"6:00am-4:00pm lunes a viernes 6:00am-12:00pm sÃ¡bado",
    "Phone":"787-825-1908",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -67.41956606,18.15514852 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Post Center",
    "ADDRESS":"Edificio Post Center 60N Calle Post Oficina105",
    "City":"Mayagüez",
    "State":"PR",
    "zip code":"680",
    "Hours":"6:30am-12:00pm lunes a viernes",
    "Phone":"787-831-2929",
    "Fax":"787-834-4045"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -67.41956606,18.15514852 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clinico Asociación de Maestros",
    "ADDRESS":"Edificio Asoc. De Maestros Oficina 2E 158 Calle Ramos Antonini",
    "City":"Mayagüez",
    "State":"PR",
    "zip code":"680",
    "Hours":"6:30am-12:00pm lunes a viernes",
    "Phone":"787-832-2929",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.79659161,18.41271117 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Plaza del Norte",
    "ADDRESS":"Edificio Cafeteros Carr. #2 KM 82 Marginal",
    "City":"Hatillo",
    "State":"PR",
    "zip code":"659",
    "Hours":"7:00am-1:00pm lunes a sÃ¡bado",
    "Phone":"",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -67.08085769,18.3778777 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Moca",
    "ADDRESS":"Calle Concepción Cera #90",
    "City":"Moca",
    "State":"PR",
    "zip code":"676",
    "Hours":"6:30am-2:30pm Lunes a viernes",
    "Phone":"787-877-1900",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.48994291,18.42304957 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Manatí",
    "ADDRESS":"Calle Marginal B-6 Urb. San Salvador",
    "City":"Manati",
    "State":"PR",
    "zip code":"674",
    "Hours":"6:30am - 2:00pm lunes a viernes 7:00am-12:00pm sÃ¡bado",
    "Phone":"787-884-5886",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -67.1915503,18.3010812 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico Medi-Serv Inc.",
    "ADDRESS":"Carr. 2 KM 70.2 Santana Plaza",
    "City":"",
    "State":"PR",
    "zip code":"",
    "Hours":"6:30am - 2:00pm lunes a viernes 7:00am-12:00pm sÃ¡bado",
    "Phone":"787-881-2700",
    "Fax":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -66.97225779,18.33625104 ]
    },
    "properties": {
    "Laboratorio":"Laboratorio Clínico La Victoría",
    "ADDRESS":"Carr. 446 KM 3.5 Bo. Robles",
    "City":"San Sebastian",
    "State":"PR",
    "zip code":"685",
    "Hours":"6:30am - 2:00pm lunes a viernes 7:00am-12:00pm sÃ¡bado",
    "Phone":"787-896-0503",
    "Fax":""
    }
  }
]
};
   
//end of data/////////////////////////////////////////////////////////////////////////

    
//change icon name here///////////////////////////////////////////////////////////////    
var RxIcon = new L.Icon({
    iconUrl: "img/icons8-pharmacy-30.png",
    iconSize: [25, 25],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

// ADD THE OTHER FEAUTURES//////////////////////////////////////////////////////////
function createFeatures (feature,layer){
    layer.bindPopup("<h3>" + feature.properties.Laboratorio +
      "</h3><br>" + feature.properties.ADDRESS + "</br>" + "<br>" +
      feature.properties.Hours + "</br>" + "<br>" + feature.properties.Phone + "</br>" +
      "<br>" + feature.properties.Fax + "</br" + "<br>" feature.properties.hours + "</br>")
}

// read the Json file
L.geoJson(pharmacies, {
	// pointToLayer: function (feature, latlng) {
	// 	return L.circleMarker(latlng, geojsonMarkerOptions);
  // }
    onEachFeature: createFeatures
}).addTo(map);


