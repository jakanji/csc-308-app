// src/MyApp.jsx
import React, {useState} from "react"; //Import React
import Table from "./Table"; //Import Table from Table.jsx

//Define the MyApp component as a function
function MyApp() {
    //MyApp returns what is supposed to be rendered on the screen.
    //React functional components must return an element to be rendered on the screen
    //The Element can be a nested structure like in the example below:
  const [characters, setCharacters] = useState([
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
  ]);

  //difining removeOnecharacter here lets us be right ins cope to refer to characters and setCharacters
  function removeOneCharacter(index){
    //filter creates a new array with the elements that pass a given test
    const updated = characters.filter(
      //in this case, we return the array without "index"
      (character, i) => {
        return i !== index;
      }
    );
    setCharacters(updated);

  }

  return (
      <div className= "containter"> 
        <Table 
          characterData= {characters}
          removeCharacter={removeOneCharacter}
        />
      </div>
  );
}



export default MyApp; //This makes the component available to be imported intp other components/files
