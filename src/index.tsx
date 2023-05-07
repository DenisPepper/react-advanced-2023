import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {App} from "./components/app/app";
import './styles/index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLDivElement,
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
);
