import React, { useState } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";
import "./index.css";

function App() {
  const [random, setRandom] = useState(Math.random());

  mapboxgl.accessToken = "ЗАМЕНИТЕ_НА_ПОЛУЧЕННЫЙ_ВАМИ_ТОКЕН";

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
