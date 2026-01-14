//backend.js
import express from "express"; //Express works as an HTTP middleware, 
// dispatching HTTP calls to the routes we define and sending back responses


const app = express();
const port = 8000; //port number we'll use to listen to incoming HTTP requests
const users = {
    users_list: [
        {
        id: "xyz789",
        name: "Charlie",
        },
        {
            id: "abc123",
            name: "Mac",
            job: "Bouncer",
        },
        {
            id: "ppp222",
            name: "Mac",
            job: "Professor"
        },
        {
            id: "yat999",
            name: "Dee",
            job: "Aspiring actress"
        },
        {
            id: "zap555",
            name: "Dennis",
            job: "Bartender"
        }
    ]
};

//setup app to process incoming data in JSON format
app.use(express.json());

//Set API endpoint with .get
//First argument ("/") is the URL pattern that will map to this endpoint
//Second argument is the callback function that will be called when our server
//receives an incoming GET request mathcing the / URL patter
app.get("/", (req, res) => { //first argument represents the request; second argument represents the response

    res.send("Hello World!");
});

app.get("/users", (req, res)=>{
    res.send(users);
});


app.listen(port, () =>{
    console.log(
        'Example app listening at http://localhost:8000'
    );
});