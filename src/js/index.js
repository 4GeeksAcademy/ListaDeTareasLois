// Importar React en el paquete
import React from "react";
import ReactDOM from "react-dom";

// Incluir tus estilos en el paquete de webpack
import "../styles/index.css";

// Importar tus propios componentes
import Home from "./component/home.jsx";

// Renderizar tu aplicación de React
ReactDOM.render(<Home />, document.querySelector("#app"));
