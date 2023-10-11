import React from 'react'
import ReactDOM from 'react-dom/client'
import './tailwind.css'
import {BrowserRouter,HashRouter} from "react-router-dom";
import App from "./App.jsx";

//ReactDOM.createRoot(document.getElementById('root')).render(
//  //<React.StrictMode>
//    <App />
//  //</React.StrictMode>,
//)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <HashRouter>
        <App/>
    </HashRouter>
)