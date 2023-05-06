import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLDivElement,
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div>Hello, world!</div>
        </BrowserRouter>
    </React.StrictMode>,
);
