let mapToken = "pk.eyJ1IjoiaW1tZGV2IiwiYSI6ImNtOHd2NWRhdzA3MWQybHIxdWlsbXRsanMifQ.uiZxrIbQ633XAj2PTAFA1w";
mapboxgl.accessToken = mapToken ;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center:listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});



const marker = new mapboxgl.Marker({color:"red"})
    .setLngLat(listing.geometry.coordinates) //showData.geometry.coordinates
    .addTo(map);

    const markerHeight = 50;
    const markerRadius = 10;
    const linearOffset = 25;
    const popupOffsets = {
        'top': [0, 0],
        'top-left': [0, 0],
        'top-right': [0, 0],
        'bottom': [0, -markerHeight],
        'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
        'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
        'left': [markerRadius, (markerHeight - markerRadius) * -1],
        'right': [-markerRadius, (markerHeight - markerRadius) * -1]
    };
    const popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
        .setLngLat(listing.geometry.coordinates)
        .setHTML(`<h4>${listing.title}</h4><p>Exact location provided, after booking</p>`)
        .setMaxWidth("300px")
        .addTo(map);