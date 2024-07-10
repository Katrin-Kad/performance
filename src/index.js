import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/reset.min.css';
import './styles/styles.min.css';


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
