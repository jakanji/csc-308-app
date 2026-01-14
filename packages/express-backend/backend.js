//backend.js
import express from "express"; //Express works as an HTTP middleware, 
// dispatching HTTP calls to the routes we define and sending back responses


const app = express();
const port = 8000; //port number we'll use to listen to incoming HTTP requests

//setup app to process incoming data in JSON format
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () =>{
    console.log(
        'Example app listening at http://localhost:${port}'
    );
});