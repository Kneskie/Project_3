// A function to determine the marker size based on the population
function markerSize(deathrate) {
    return Math.sqrt(deathrate) * 10000;
  }

// An array that contains all the information needed to create city and state markers
// Population Data Source: U.S. 2020 Decennial Census
let locations = [
    {
      coordinates: [40.71427, -74.0059],
      year2010: {
        name: "New York",
        deathrate: 8.643666
      },
      year2017: {
        name: "New York",
        deathrate: 18.36655
      },
      year2020: {
        name: "New York",
        deathrate: 26.063816,
      }
    },
    {
      coordinates: [34.0522, -118.2437],
      year2010: {
        name: "Los Angeles",
        deathrate: 7.13808 
      },
      year2017: {
        name: "Los Angeles",
        deathrate: 9.12736
      },
      year2020: {
        name: "Los Angeles",
        deathrate: 20.28176
      },
    },
    {
      coordinates: [41.8781, -87.6298],
      year2010: {
        name: "Chicago",
        deathrate: 9.47424
      },
      year2017: {
        name: "Chicago",
        deathrate: 23.69763
      },
      year2020: {
        name: "Chicago",
        deathrate: 36.96109
      }
    },
    {
      coordinates: [39.9526, -75.1652],
      year2010: {
        name: "Philadelphia",
        deathrate: 22.66962
      },
      year2017: {
        name: "Philadelphia",
        deathrate: 65.85459
      },
      year2020: {
        name: "Philadelphia",
        deathrate: 70.40464
      },
    },
    {
      coordinates: [32.7767, -96.7970],
      year2010: {
        name: "Dallas",
        deathrate: 9.03454
      },
      year2017: {
        name: "Dallas",
        deathrate: 12.95565
      },
      year2020: {
        name: "Dallas",
        deathrate: 17.21826
      },
    },
    {
        coordinates: [33.4484, -112.0740],
        year2010: {
            name: "Phoenix",
            deathrate: 15.94624
        },
        year2017: {
            name: "Phoenix",
            deathrate: 22.41906
        },
        year2020: {
            name: "Phoenix",
            deathrate: 35.25479
        },
    },
    {
        coordinates: [30.3322, -81.6557],
        year2010: {
            name: "Jacksonville",
            deathrate: 17.39407
        },
        year2017: {
            name: "Jacksonville",
            deathrate: 46.45673
        },
        year2020: {
            name: "Jacksonville",
            deathrate: 53.36638
        }
    },
    {
        coordinates: [47.6062, -122.3321],
        year2010: {
            name: "Seattle",
            deathrate: 12.73689
        },
        year2017: {
            name: "Seattle",
            deathrate: 15.38175
        },
        year2020: {
            name: "Seattle",
            deathrate: 21.87421
        }
    },
    {
        coordinates: [39.2904, -76.6122],
        year2010: {
            name: "Baltimore",
            deathrate: 16.5155
        },
        year2017: {
            name: "Baltimore",
            deathrate: 50.18304
        },
        year2020: {
            name: "Baltimore",
            deathrate: 52.66092 
        }
    },
    {
        coordinates: [39.7684, -86.1581],
        year2010: {
            name: "Indianapolis",
            deathrate: 16.87641
        },
        year2017: {
            name: "Indianapolis",
            deathrate: 37.95825
        },
        year2020: {
            name: "Indianapolis",
            deathrate: 61.01451
        },
    },
    {
      coordinates: [39.7420, -104.9915],
      year2010: {
        name: "Denver",
        deathrate: 21.11665
      },
      year2017: {
        name: "Denver",
        deathrate: 22.38306
      },
      year2020: {
        name: "Denver",
        deathrate: 41.08129
      },
    }
  ];
  
  // Define arrays to hold the created city and state markers.
  let year2010Markers = [];
  let year2017Markers = [];
  let year2020Markers = [];
  
  // Loop through locations, and create the 2010, 2017, and 2020 markers.
  for (let i = 0; i < locations.length; i++) {
    // Set the marker radius for 2010 by passing the deathrate to the markerSize() function.
    year2010Markers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.90,
        color: "white",
        fillColor: "white",
        radius: markerSize(locations[i].year2010.deathrate)
      })
    );
  
    // Set the marker radius for 2017 by passing the deathrate to the markerSize() function.
    year2017Markers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.50,
        color: "purple",
        fillColor: "purple",
        radius: markerSize(locations[i].year2017.deathrate)
      })
    );
    // Set the marker radius for 2020 by passing the deathrate to the markerSize() function.
    year2020Markers.push(
        L.circle(locations[i].coordinates, {
          stroke: false,
          fillOpacity: 0.50,
          color: "orangered",
          fillColor: "orangered",
          radius: markerSize(locations[i].year2020.deathrate)
        })
    );
  }
  
  // Create the base layers.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });
  
  
  // Create three separate layer groups: one for the each of the markers.
  let year2010 = L.layerGroup(year2010Markers);
  let year2017 = L.layerGroup(year2017Markers);
  let year2020 = L.layerGroup(year2020Markers);
  // Create a baseMaps object to contain the streetmap and the darkmap.
  let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };
  // Create an overlayMaps object to contain the "State Population" and "City Population" layers
  let overlayMaps = {
    "2020 Deaths Per 100k" : year2020,
    "2017 Deaths per 100k": year2017,
    "2010 Deaths per 100k": year2010  };  
  
  // Modify the map so that it has the streetmap, and all year layers
  let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [street, year2010, year2017, year2020]
  });
  
  // Create a layer control that contains our baseMaps and overlayMaps, and add them to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
  
