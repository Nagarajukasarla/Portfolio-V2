import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Ensure content is shown and loader is removed
document.body.classList.add('content-loaded');
const loader = document.querySelector('.loading-spinner');
if (loader) {
    loader.style.display = 'none';
}
