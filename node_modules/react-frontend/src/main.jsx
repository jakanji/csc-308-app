// src/main.jsx
import React from "react"; //Import React
import ReactDOMClient from "react-dom/client"; //Import ReactDOMClient
import MyApp from "./MyApp";
import "./main.css"; //import the style file (CSS)


// Create the container
const container = document.getElementById("root");

// Create a root
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the Root
root.render(<MyApp />); //This causes our React component to be injected in the roof of an HTML page
                        //that goes into the browser