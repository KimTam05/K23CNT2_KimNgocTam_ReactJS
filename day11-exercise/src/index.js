import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import KntApp from './KntApp';

const kntRoot = ReactDOM.createRoot(document.getElementById('kntRoot'));
kntRoot.render(
  <React.StrictMode>
    <KntApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
