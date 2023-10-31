import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const noHTML = document.getElementById('root');

const root = ReactDOM.createRoot(noHTML); 


root.render(<App />);