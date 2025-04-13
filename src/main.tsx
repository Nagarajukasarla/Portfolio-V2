import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { initEmailJS } from "./config/emailjs";

// EmailJS is now properly configured and working

// Initialize EmailJS and log the result
const emailJSInitialized = initEmailJS();
if (!emailJSInitialized) {
    console.warn(
        "EmailJS initialization failed. Contact form functionality may be limited."
    );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Ensure content is shown and loader is removed
document.body.classList.add("content-loaded");
const loader = document.querySelector(".loading-spinner") as HTMLElement;
if (loader) {
    loader.style.display = "none";
}
