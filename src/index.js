import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppLang from './lang-context/AppLang';
// import { BrowserRouter } from "react-router-dom";
// import App from './paltrows-power-toes/App';
// import Bomb from "./state-drills/Bomb";
// import HelloWorld from "./state-drills/HelloWorld";
// import RouletteGun from "./state-drills/RouletteGun";

// ReactDOM.render(
// <BrowserRouter>
//     <App />
// </BrowserRouter>, 
// document.getElementById("root")
// );

ReactDOM.render(
    <AppLang />,
    document.getElementById('root')
);