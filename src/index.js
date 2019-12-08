import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// import Bomb from "./state-drills/Bomb";
// import HelloWorld from "./state-drills/HelloWorld";
// import RouletteGun from "./state-drills/RouletteGun";

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, 
document.getElementById("root")
);