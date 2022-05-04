import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Repairs } from "./components/Repairs";
import reportWebVitals from './reportWebVitals';

export const API = "http://localhost:8088"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Repairs />
  </React.StrictMode>
);

reportWebVitals();
