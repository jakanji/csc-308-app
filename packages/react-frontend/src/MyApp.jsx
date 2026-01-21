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
    console.log("attempting update...")
    postUsers(person)
      .then(async (response) => {
        const newUser = await response.json(); //get user with randomly generated id from backend
        
        if (response.status !== 201){//check to see if POST returned the right code
          throw new Error(`HTTP error, not 201: ${response.status}`,)
        }else {

        //update the local data with the user if POST was successful
        setCharacters([...characters, newUser]);
        console.log("Update successful: ", newUser);
        }
      })    
      .catch((error)=> {console.log("Error updating!: ", error)});
  }

  //difining removeOnecharacter here lets us be right ins cope to refer to characters and setCharacters
  function removeOneCharacter(index){
    //delete from backend...
    console.log("removing from backend...");

    //find id of the user we're trying to delete
    const id = characters.find((character, i) => i === index)["id"];          
    console.log("id to delete: ", id);

    const promise = fetch(`http://localhost:8000/users/${id}`, {
    method: "DELETE"
    })
    .then(async (response) => {
      if (!response.ok){
        throw new error(error);
      } 
      //delete from frontend if successful
        console.log("removing from frontend...");
        //filter creates a new array with the elements that pass a given test
        setCharacters(characters.filter((user) =>user["id"] !== id));
    })
    .catch(error => console.log("Error deleting: ", error));
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
