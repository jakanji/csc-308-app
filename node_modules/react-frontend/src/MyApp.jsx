// src/MyApp.jsx
import React, {useState, useEffect} from "react"; //Import React
import Table from "./Table"; //Import Table from Table.jsx
import Form from "./Form";

//Define the MyApp component as a function
function MyApp() {
    //MyApp returns what is supposed to be rendered on the screen.
    //React functional components must return an element to be rendered on the screen
    //The Element can be a nested structure like in the example below:
  const [characters, setCharacters] = useState([  ]);

  useEffect(() => {
    fetchUsers().then(res => res.json())
                .then((json) =>setCharacters(json["users_list"]))
                .catch((error) => {console.log(error);})
  }, [] );

  function updateList(person){
    console.log("updating...")
    //if postUsers promise successfully posts the given user to the server...
    postUsers(person)
      //...then we update the local data with the same user
      .then(()=>setCharacters([...characters, person]))
      .catch((error)=> {console.log("error updating: ", error)});
  }

  //difining removeOnecharacter here lets us be right ins cope to refer to characters and setCharacters
  function removeOneCharacter(index){
    console.log("removing...");
    //filter creates a new array with the elements that pass a given test
    const updated = characters.filter(
      //in this case, we return the array without "index"
      (character, i) => {
        return i !== index;
      }
    );
    setCharacters(updated);

  }

  function fetchUsers(){
    const promise = fetch("http://localhost:8000/users");
    return promise;
  }

  //posterUsers makes a promise to post the given user to the server
  function postUsers(person){
    const promise = fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
        body: JSON.stringify(person),
      });
    return promise;
  }

  return (
      <div className= "containter"> 
        <Table 
          characterData= {characters}
          removeCharacter={removeOneCharacter}
        />
        <Form handleSubmit={updateList}/>
      </div>
  );
}



export default MyApp; //This makes the component available to be imported intp other components/files
