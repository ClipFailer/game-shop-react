import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App/App";
import {BrowserRouter} from "react-router-dom";
import Context from "./components/Context/Context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Context>
            <App/>
        </Context>
    </BrowserRouter>
);
