import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

// import { IsMenuShownContext } from 'helpers/isMenuShownContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <IsMenuShownContext.Provider value={{ isMenuShown: false }}> */}
        <App />
        {/* </IsMenuShownContext.Provider> */}
    </React.StrictMode>
);
