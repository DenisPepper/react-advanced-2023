import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Counter} from "./components/counter/counter";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLDivElement,
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Counter/>
        </BrowserRouter>
    </React.StrictMode>,
);
