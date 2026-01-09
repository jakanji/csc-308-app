// src/MyApp.jsx
import React from "react"; //Import React

//Define the MyApp component as a function
function MyApp() {
    //MyApp returns what is supposed to be rendered on the screen.
    //React functional components must return an element to be rendered on the screen
    //THE Element can be a nested structure like in the example below:
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default MyApp; //This makes the component available to be imported intp other components/files
