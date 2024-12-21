function initMap() {

    const markers = [
        {
            locationName: 'Netaville',
            lat: 42.00549115720636, 
            lng: 21.410395510672547,
            address: 'Nikola Tesla 9,<br> Skopje'
        },
        {
            locationName: 'Base42',
            lat: 41.99754623915873, 
            lng: 21.407722026015424,
            address: 'Rimska 25,<br> Skopje'
        },
        {
            locationName: 'Public Room',
            lat: 41.99015817801877,
            lng: 21.42592806834348,
            address: '50-ta Divizija 22,<br> Skopje'
        },
        {
            locationName: 'Startup CLub',
            lat: 41.981261372948055, 
            lng: 21.455414910671564,
            address: '3rd Macedonian Brigade 60,<br> Skopje'
        },
        {
            locationName: 'Cowork Konnectivity',
            lat: 41.97926504480842, 
            lng: 21.438658302730715,
            address: 'Georgi Dimitrov 16,<br> Skopje'
        }
    ];

    
    const centerMap = {lat: 42.001082, lng: 21.4346245}

    const mapOptions = {
        center: centerMap,
        zoom: 14,
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on" 
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f5f5f2"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#71c8d4"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "color": "#e5e8e7"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "stylers": [
                    {
                        "color": "#8ba129"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c7c7c7"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#a0d3d3"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "stylers": [
                    {
                        "color": "#91b65d"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "stylers": [
                    {
                        "gamma": 1.51
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road"
            },
            {
                "featureType": "road"
            },
            {},
            {
                "featureType": "road.highway"
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#808080" 
                    }
                ]
            },
            
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#808080" 
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#808080" 
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#808080" 
                    }
                ]
            }
        ]
    }

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    markers.forEach(markerData => {
        const marker = new google.maps.Marker({
            position: { lat: markerData.lat, lng: markerData.lng },
            map: map,
            title: markerData.locationName
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${markerData.locationName}</h3><p>${markerData.address}</p>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });

    for(let i = 0; i < markers.length; i++){
        const marker = new google.maps.Marker({
            position: { lat: markers[i]['lat'], lng: markers[i]['lng'] },
            map: map
        });
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Add user location marker
            const userMarker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'You Are Here',
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    fillColor: '#4285F4',
                    fillOpacity: 1,
                    strokeColor: '#FFFFFF',
                    strokeWeight: 2
                }
            });

            map.setCenter(userLocation);

            // Calculate distances and show only nearby markers
            const nearMarkers = markers.filter(markerData => {
                const distance = haversineDistance(userLocation, { lat: markerData.lat, lng: markerData.lng });
                return distance <= 5; // Distance in kilometers
            });

            console.log('Nearby markers:', nearMarkers);
        }, () => {
            alert('Geolocation failed or permission denied.');
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }


    // Haversine formula to calculate distance between two points
    function haversineDistance(coord1, coord2) {
        const toRad = angle => angle * (Math.PI / 180);
        const R = 6371; // Earth radius in km

        const dLat = toRad(coord2.lat - coord1.lat);
        const dLng = toRad(coord2.lng - coord1.lng);
        const a = Math.sin(dLat / 2) ** 2 +
                Math.cos(toRad(coord1.lat)) * Math.cos(toRad(coord2.lat)) * Math.sin(dLng / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c; // Distance in km


    }
}
