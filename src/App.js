import React, { useLayoutEffect, useState } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "./index.css";

function App() {
  const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken = "pk.eyJ1IjoiYW5uYWFraG1ldCIsImEiOiJjbDFxYTFnbGgwZm9iM2twdGFrZmIwbTF3In0.dHeMvTTWEoqLLM2Gu0SEyQ";

  useLayoutEffect(() => { 
    new mapboxgl.Map({
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

render(<App />, document.querySelector("#root"));


export default App;

