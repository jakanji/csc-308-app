// src/MyApp.jsx
import React from "react"; //Import React
import Table from "./Table"; //Import Table from Table.jsx

//Define the MyApp component as a function
function MyApp() {
    //MyApp returns what is supposed to be rendered on the screen.
    //React functional components must return an element to be rendered on the screen
    //THE Element can be a nested structure like in the example below:
  return (
    <div>
      <div className= "containter"> 
        <Table />
      </div>
    </div>
  );
}

export default MyApp; //This makes the component available to be imported intp other components/files
