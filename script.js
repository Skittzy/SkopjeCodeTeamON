    let markersArray = []; 
    let markersVisible = true;
    let currentInfoWindow = null;
    let photoPopup = null;

    function initMap() {

        const markers = [
            {
                locationName: 'Netaville',
                lat: 42.00549115720636, 
                lng: 21.410395510672547,
                address: 'Nikola Tesla 9, 1000 Skopje',
                photos:['./sliki_on/netaville2.jpg', './sliki_on/netaville1.jpg']
            },
            {
                locationName: 'Base42',
                lat: 41.99754623915873, 
                lng: 21.407722026015424,
                address: 'Rimska 25, 1000 Skopje',
                photos: ['./sliki_on/base421.jpg','./sliki_on/base422.jpg']
            },
            {
                locationName: 'Public Room',
                lat: 41.99015817801877,
                lng: 21.42592806834348,
                address: '50-ta Divizija 22, 1000 Skopje',
                photos: ['./sliki_on/publicroom1.jpg', './sliki_on/publicroom2.jpg']
            },
            {
                locationName: 'Startup CLub',
                lat: 41.981261372948055, 
                lng: 21.455414910671564,
                address: '3rd Macedonian Brigade 60, 1000 Skopje',
                photos: ['./sliki_on/startup1.jpg', './sliki_on/startup2.jpg']
            },
            {
                locationName: 'Cowork Konnectivity',
                lat: 41.97926504480842, 
                lng: 21.438658302730715,
                address: 'Georgi Dimitrov 16, 1000 Skopje',
                photos: ['./sliki_on/cowork1.jpg', './sliki_on/cowork2.jpg']
            },
            {
                locationName: 'The Hub by Adeva',
                lat: 41.998036525226524,
                lng: 21.426050261306,
                address: 'Partizanski Odredi 17, 1000 Skopje',
                photos: ['./sliki_on/adeva1.jpg', './sliki_on/adeva2.jpg']
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


        //inicijalno gi stavam site markeri na mapata
        function addMarkersToMap(markerDataArray, userLocation) {
            markerDataArray.forEach(markerData => {
                const marker = new google.maps.Marker({
                    position: { lat: markerData.lat, lng: markerData.lng },
                    map: map,
                    title: markerData.locationName
                });

                const distance = haversineDistance(userLocation, { lat: markerData.lat, lng: markerData.lng });
                
                const infoWindowContent = `
                    <div style="color: black; font-family: Arial, sans-serif;">
                        <h3 style="color: black; font-size: 21px; font-weight: bold;">${markerData.locationName}</h3>
                        <p style="color: black;">${markerData.address}</p>
                        <p style="color: black;">Distance from you: ${distance.toFixed(2)} km</p>
                        <div>
                            ${markerData.photos ? markerData.photos.map(photo => `
                                <img src="${photo}" alt="${markerData.locationName}" 
                                    style="width: 150px; height: 150px; object-fit: cover; margin: 5px;">
                            `).join('') : ''}
                        </div>
                    </div>
                `;

                const infoWindow = new google.maps.InfoWindow({
                    content: infoWindowContent
                });

                marker.addListener('click', () => {
                    if (currentInfoWindow) {
                        currentInfoWindow.close();  
                    }
                    infoWindow.open(map, marker);
                    currentInfoWindow = infoWindow; 
                });

                markersArray.push(marker); 
            });
        }

        addMarkersToMap(markers, { lat: 42.001082, lng: 21.4346245 }); 

        // Add event listener for image click
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('thumbnail-photo')) {
            const location = event.target.dataset.location;
            const photoIndex = event.target.dataset.index;
            openPhotoPopup(location, photoIndex);
        }
    });

    function openPhotoPopup(location, startIndex) {
        const marker = markers.find(m => m.locationName === location);
        const photos = marker.photos;
        let currentIndex = startIndex;

        const photoPopup = document.createElement('div');
        photoPopup.classList.add('photo-popup');

        const photoContainer = document.createElement('div');
        photoContainer.classList.add('photo-container');
        const imgElement = document.createElement('img');
        imgElement.src = photos[currentIndex];
        imgElement.classList.add('photo-popup-image');

        const prevButton = document.createElement('button');
        prevButton.classList.add('nav-button', 'prev');
        prevButton.textContent = '←';

        const nextButton = document.createElement('button');
        nextButton.classList.add('nav-button', 'next');
        nextButton.textContent = '→';

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + photos.length) % photos.length;
            imgElement.src = photos[currentIndex];
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % photos.length;
            imgElement.src = photos[currentIndex];
        });

        photoContainer.appendChild(prevButton);
        photoContainer.appendChild(imgElement);
        photoContainer.appendChild(nextButton);

        photoPopup.appendChild(photoContainer);
        document.body.appendChild(photoPopup);

        // Close the popup when clicking outside
        photoPopup.addEventListener('click', (e) => {
            if (e.target === photoPopup) {
                document.body.removeChild(photoPopup);
            }
        });
    }

        function haversineDistance(coord1, coord2) {
            const toRad = angle => angle * (Math.PI / 180);
            const R = 6371;

            const dLat = toRad(coord2.lat - coord1.lat);
            const dLng = toRad(coord2.lng - coord1.lng);
            const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(coord1.lat)) * Math.cos(toRad(coord2.lat)) * Math.sin(dLng / 2) ** 2;
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            return R * c;
        }

        function filterMarkers(userLocation) {
            console.log("Filtering markers for user at:", userLocation);

            const nearbyMarkers = markers.filter(markerData => {
                const distance = haversineDistance(userLocation, { lat: markerData.lat, lng: markerData.lng });
                console.log(`Distance from user to ${markerData.locationName}: ${distance} km`);
                return distance <= 2; 
            });

            clearMarkers();
            addMarkersToMap(nearbyMarkers, userLocation);
        }

        function clearMarkers() {
            markersArray.forEach(marker => marker.setMap(null)); 
            markersArray = []; 
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    console.log("User location: ", userLocation);

                    const userMarker = new google.maps.Marker({
                        position: userLocation,
                        map: map,
                        title: 'You Are Here',
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 10,
                            fillColor: '#4285F4',
                            fillOpacity: 1,
                            strokeColor: '#FFFFFF',
                            strokeWeight: 2
                        }
                    });

                    map.setCenter(userLocation);

                    document.getElementById('near-me-btn').addEventListener('click', () => {
                        const button = document.getElementById('near-me-btn');
                        if (markersVisible) {
                            filterMarkers(userLocation);
                            button.textContent = "Show All Places"; 
                        } else {
                            clearMarkers();
                            addMarkersToMap(markers, userLocation);
                            button.textContent = "Places Near Me"; 
                        }
                        markersVisible = !markersVisible;
                    });
                },
                error => {
                    console.error("Geolocation error: ", error);
                    alert('Geolocation failed or permission denied.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

