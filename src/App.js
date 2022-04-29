import React, { useLayoutEffect, useState } from "react";
import "./index.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

function App() {
  const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken = "pk.eyJ1IjoiYW5uYWFraG1ldCIsImEiOiJjbDJoZjdybTAwZDllM2lwaGpwMjZreHhsIn0.VpRx5KdVw-9fAvWYptlseg";

  useLayoutEffect(() => { 
    var map  = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [37.611920, 55.761990],
    zoom: 10
  })
  }, [])

  return (
    <>
      <button
        className="ui-button"
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

export default App;

