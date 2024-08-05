import './index.css'
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { Provider } from "./context/Navigation";

const el = document.getElementById('root');
const reactElement = ReactDOM.createRoot(el);

reactElement.render(
    <Provider>
        <App />
    </Provider>

);