import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const appRoot = document.getElementById('root')

const root = createRoot(appRoot)

root.render(<App />)
