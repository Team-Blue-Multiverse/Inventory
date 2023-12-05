import React from "react";
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime'
import {App} from './components/App';
import { BrowserRouter } from "react-router-dom";
// import '../../public/style.css'

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);