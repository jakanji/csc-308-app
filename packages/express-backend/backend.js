//backend.js
import express, { response } from "express"; //Express works as an HTTP middleware, 
// dispatching HTTP calls to the routes we define and sending back responses
import cors from "cors"; //import CORS(Cross-Origine Resource Sharing)
import mongoose from "mongoose";//Mongoose is used to connect to MongoDB servers
import userModel from "./user.js";

const app = express();
const port = 8000; //port number we'll use to listen to incoming HTTP requests
mongoose.set("debug", true);
mongoose
    .connect("mongodb://localhost:27017/users")
    .catch((error) => console.log(error));

function addUsers(user){
    let id = Math.random() * 999999 //generate a user id
    const newUser= {
        "id": id.toFixed(0),
        "name": user["name"],
        "job": user["job"],       
    }
    console.log(newUser);
    const userToAdd = new userModel(newUser);
    console.log(userToAdd);
    const promise = userToAdd.save();
    return promise;
}

function getUsers(name, job){
    let promise;
    if (name === undefined && job === undefined){
        promise = userModel.find();
    }else if (name && !job){
        promise = userModel.find({name: name});
    }else if (job && !name){
        promise = userModel.find({job: job});
    }
    return promise;
};

//setup app to allow Cross-Origin Resource Sharing (allows backend to respond to calls from a different origin (port))
app.use(cors())
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
    const name = req.query.name;
    const job = req.query.job;

    let result = getUsers(name, job);
    result.then((users)=>{
        res.status(200).send(users);
    }).catch((error) => {
        res.status(500).send(error);
    });
});

app.get("/users/:id", (req, res) => {
    console.log("finding user by id...");
    const id = req.params.id;
    console.log(id);

    let newresult = userModel.findById(id);
    newresult.then((result) => {
        console.log(result);
        res.status(200).send(result);
    })
    .catch((error)=> {
        res.status(500).send('Server side error');
    });
});

app.post("/users", (req, res)=> {
    const user = req.body;
    try{
        const newUser = addUsers(user);
        newUser.then(async (result) => {
            res.status(201).send(result);
            }
        ).catch(async(error) => (res.status(500).send("Error posting:", error)));
    }catch (error){
        console.log(error);
        res.status(500).send("Error posting:", error);
    }
});

app.delete("/users/:id", (req, res) =>{
    const userid = req.params.id
    console.log("attempting to delete: ",userid);

    try{
        let promise = userModel.deleteOne({_id: userid});
        promise.then((result2)=> {
            console.log("Result:", result2);
            res.status(201).send(result2);``
        }).catch((error)=>{
            console.log(error);
            res.status(404).send(error);
        })
    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }
});

app.listen(port, () =>{
    console.log(
        `Example app listening at http://localhost:${port}`
    );
});