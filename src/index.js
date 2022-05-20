import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Repairs } from "./components/Repairs";
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

export const API = "http://localhost:8088"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Repairs />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
