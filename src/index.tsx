import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {App} from "./components/app/app";
import './styles/index.css';
import {ThemeProvider} from "./theme-provider/theme-provider";

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
