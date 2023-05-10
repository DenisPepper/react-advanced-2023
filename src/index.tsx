import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './app/styles/index.css';
import {ThemeProvider} from "app/theme-provider/theme-provider";
import {App} from "app/app";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLDivElement,
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                    <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
