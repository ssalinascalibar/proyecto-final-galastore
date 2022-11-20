import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { useContext } from 'react'
import Context from './Context';
import { ContextProvider } from './Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //se usa el provider en este punto para poder compartir
  //correctamente la variable global isAuth y usarlas en private routes
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
);


