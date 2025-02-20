import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router";
import Contexts from "./components/Contexts";

createRoot(document.getElementById('root')).render(
    <Contexts>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Contexts>
);
