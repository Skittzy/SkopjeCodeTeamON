let markersArray = [];
let markersVisible = true;
let currentInfoWindow = null;

function initMap() {

    const markers = [
        {
            locationName: 'Netaville',
            lat: 42.00549115720636,
            lng: 21.410395510672547,
            address: 'Nikola Tesla 9, 1000 Skopje',
            photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXezLFNon630Atg5yACtTR8Vz3Z4M0yweSQ&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5haadzXVBc6S0GYvDD9VsIxVYSd6aEauNHw&s']
        },
        {
            locationName: 'Base42',
            lat: 41.99754623915873,
            lng: 21.407722026015424,
            address: 'Rimska 25, 1000 Skopje',
            photos: ['https://lh3.googleusercontent.com/p/AF1QipNP_4Mg2nxqXnzB5zHlwlX2BD0xWTumY3RnvB_q=s680-w680-h510', 'https://it.mk/wp-content/uploads/2024/06/IMG_2573.png']
        },
        {
            locationName: 'Public Room',
            lat: 41.99015817801877,
            lng: 21.42592806834348,
            address: '50-ta Divizija 22, 1000 Skopje',
            photos: ['https://www.publicroom.org/assets/images/Event-Rooms/Makers-Room.jpg', 'https://www.publicroom.org/assets/images/Event-Rooms/Slava-Room.jpg']
        },
        {
            locationName: 'Startup CLub',
            lat: 41.981261372948055,
            lng: 21.455414910671564,
            address: '3rd Macedonian Brigade 60, 1000 Skopje',
            photos: ['https://lh3.googleusercontent.com/p/AF1QipMckGEimfFt__YJ4bNxO7GN5i27JjvRP6uw0aSA=s680-w680-h510', 'https://lh3.googleusercontent.com/p/AF1QipMKPhn51c6SzLLaks_4NYW6rApxAIopFAamcUNm=s680-w680-h510']
        },
        {
            locationName: 'Cowork Konnectivity',
            lat: 41.97926504480842,
            lng: 21.438658302730715,
            address: 'Georgi Dimitrov 16, 1000 Skopje',
            photos: ['https://coworker.imgix.net/photos/macedonia/skopje/konnectivity-coworking-space/1.JPG?w=319&h=223&q=90&auto=format,compress&fit=crop&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvt1O_tq8dQHNIsRRlOJbFHZ7C5KH2PIBqg&s']
        },
        {
            locationName: 'The Hub by Adeva',
            lat: 41.998036525226524,
            lng: 21.426050261306,
            address: 'Partizanski Odredi 17, 1000 Skopje',
            photos: ['https://lh3.googleusercontent.com/p/AF1QipMe8_v176vH-pJG608TIgn2pmdq-AGaqBlbVriL=s680-w680-h510', 'https://lh3.googleusercontent.com/p/AF1QipNx6iACPZUwXciWQ8s46U6_b2n1rOtNBDeJglQi=s680-w680-h510']
        }
    ];


    const centerMap = { lat: 42.001082, lng: 21.4346245 }


    const mapOptions = {
        center: centerMap,
        zoom: 14,
        disableDefaultUI: true,
        // stil na mapa
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

    getRatingsForMarkers(markers);

    function getRatingsForMarkers(markers) {
        markers.forEach(marker => {
            const data = localStorage.getItem(marker.locationName);
            if (data) {
                marker.ratings = JSON.parse(data);
            }
        })
    }

    //inicijalno gi stavam site markeri na mapata
    function addMarkersToMap(markerDataArray, userLocation) {
        markerDataArray.forEach(markerData => {
            const marker = new google.maps.Marker({
                position: { lat: markerData.lat, lng: markerData.lng },
                map: map,
                title: markerData.locationName
            });

            if (!markerData.locationName || !markerData.address) {
                console.warn('Missing locationName or address for marker:', markerData);
                return;
            }

            const distance = haversineDistance(userLocation, { lat: markerData.lat, lng: markerData.lng });
            const ratingSection = generateRating(markerData.locationName,markerData.ratings);
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
                    ${ratingSection}
                </div>
            `;

            const infoWindow = new google.maps.InfoWindow({
                content: infoWindowContent
            });
            // infoWindow.

            marker.addListener('click', () => {
                
                onMarkerClicked(markerData.locationName);
                if (currentInfoWindow) {
                    currentInfoWindow.close();
                }
                infoWindow.open(map, marker);
                currentInfoWindow = infoWindow;
            });

            markersArray.push(marker);
        });
    }

    function generateRating(locationName,ratingData) {
        if (!ratingData) return '';
        // '5': { star: 5, count: 0, comments:[] },
        let total_rating = 0,
            rating_based_on_stars = 0;

        // Calculate total ratings and weighted ratings based on stars
        const keys = Object.getOwnPropertyNames(ratingData);
        keys.forEach(rating => {

            total_rating += ratingData[rating].count;
            rating_based_on_stars += ratingData[rating].count * ratingData[rating].star;
        });

        // Calculate average rating
        let rating_average = (rating_based_on_stars / total_rating).toFixed(1);

        // Generate rating progress bars for each star value
        const ratingBars = keys.map(rating => `
                <div class="rating_progress-value" style='cursor:pointer' onclick="showComments('${locationName}','${rating}')">
                    <p>${ratingData[rating].star} <span class="star">&#9733;</span></p>
                    <div class="progress">
                        <div class="bar" style="width:${(ratingData[rating].count / total_rating) * 100}%;"></div>
                    </div>
                    <p>${ratingData[rating].count.toLocaleString()}</p>
                </div>
            `);

        return `
            <div class="rating-app">
                <div class="rating">
                    <div class="rating_average">
                        <h1>${rating_average}</h1>
                        <div class="star-outer">
                            <div class="star-inner" style="width:${(rating_average / 5) * 100}%"></div>
                        </div>
                        <p>${total_rating.toLocaleString()}</p>
                    </div>
                    <div class="rating_progress">
                        ${ratingBars.join("")}
                    </div>
                </div>
            </div>`;
    }

    addMarkersToMap(markers, { lat: 42.001082, lng: 21.4346245 });


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

function onRatingStarsOver(element,clear) {

    const parent = element.parentElement;
    var isAfter = false;
    for (let i = 0; i < parent.children.length; i++) {
        let item = parent.children.item(i);

        item.classList.remove("checked");
        if (!clear && !isAfter)
            item.classList.add("checked");
        if (item == element)
            isAfter = true;
    }

};

function onRatingClicked(element) {
    const rating = element.dataset["rating"];
    if (rating) {
        const placeName = document.getElementById("selected-place").innerText;
        if (!placeName.split(' ').join(''))
            return;

        const comment = document.getElementById("study-place-input").value;
        let newRating = {
            '5': { star: 5, count: 0, comments: [] },
            '4': { star: 4, count: 0, comments: [] },
            '3': { star: 3, count: 0, comments: [] },
            '2': { star: 2, count: 0, comments: [] },
            '1': { star: 1, count: 0, comments: [] },
        }

        if (placeName) {
            let currentR = localStorage.getItem(placeName);
            if (currentR) {
                newRating = JSON.parse(currentR);
            }
            newRating[rating].count++;
            if (comment.split(' ').join(''))
                newRating[rating].comments.push(comment);
            localStorage.setItem(placeName, JSON.stringify(newRating));
        }
        initMap();

        document.getElementById("study-place-input").value = '';
        document.getElementById("selected-place").innerText='';
        onRatingStarsOver(element,true);
        // clearMarkers();
        // addMarkersToMap(markers, userLocation);
    }
}

function onMarkerClicked(locationName){
    document.getElementById("selected-place").innerHTML = locationName;    
    document.getElementById("rating-comments").innerHTML='';
}

function showComments(locationName,star){
    let currentR = localStorage.getItem(locationName);
    if (currentR) {
        let rating = JSON.parse(currentR);
        let comments = rating[star].comments?.map(x=>`<h4 class="comment">* ${x}</h4>`).join('');
        document.getElementById("rating-comments").innerHTML = comments;
    }
    
    // console.log(locationName,rating);
}


window.onload = async function () {
    var nearMeButton = document.getElementById("near-me-btn");
    nearMeButton.click(); // this will trigger the click event
};
