import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CursorProvider from './context/CursorProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CursorProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CursorProvider>,
);
