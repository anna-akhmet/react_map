import React, { useLayoutEffect, useState } from "react";
import "./index.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

function App() {
  const [marker, setMarker] = useState();
  const [store, setStore] = useState("km20");

  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839]
  };

  mapboxgl.accessToken = "pk.eyJ1IjoiYW5uYWFraG1ldCIsImEiOiJjbDJoZjdybTAwZDllM2lwaGpwMjZreHhsIn0.VpRx5KdVw-9fAvWYptlseg";

  useLayoutEffect(() => {
    const map  = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [37.610641, 55.761994],
    zoom: 10
    })

    setMarker(new mapboxgl.Marker()
    .setLngLat([37.6173, 55.7558])
    .addTo(map)
    )
  }, [])

  function handleStoreChange(e) {
    setStore(e.target.value);
    marker.setLNGat(stores[store]);

  }

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={handleStoreChange}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}

export default App;

// посмотреть урок стейт в юзэффект