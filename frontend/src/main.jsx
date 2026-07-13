import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/app.store.js";
import App from "../src/app/App.jsx";


ReactDOM.createRoot(
document.getElementById("root")
)
.render(

<Provider store={store}>

<App/>

</Provider>

);