// src/MyApp.jsx
import React from "react"; //Import React
import Table from "./Table"; //Import Table from Table.jsx

const characters = [
    {
        name: "Charlie",
        job: "Janitor"
    },
    {
    name: "Mac",
    job: "Bouncer"
  },
  {
    name: "Dee",
    job: "Aspring actress"
  },
  {
    name: "Dennis",
    job: "Bartender"
  }
];

//Define the MyApp component as a function
function MyApp() {
    //MyApp returns what is supposed to be rendered on the screen.
    //React functional components must return an element to be rendered on the screen
    //The Element can be a nested structure like in the example below:
  return (
      <div className= "containter"> 
        <Table characterData= {characters}/>
      </div>
  );
}

export default MyApp; //This makes the component available to be imported intp other components/files
