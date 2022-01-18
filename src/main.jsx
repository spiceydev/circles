import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChipStateProvider } from './context/chipContext';
import { NameStateProvider } from './context/nameContext';

ReactDOM.render(
  <React.StrictMode>
    <ChipStateProvider>
      <NameStateProvider>
        <App />
      </NameStateProvider>
    </ChipStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
