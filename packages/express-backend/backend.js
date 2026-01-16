//backend.js
import express, { response } from "express"; //Express works as an HTTP middleware, 
// dispatching HTTP calls to the routes we define and sending back responses


const app = express();
const port = 8000; //port number we'll use to listen to incoming HTTP requests
let users = {
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

const findUsersByName = (name) => {
    return users["users_list"].filter(
        (user) => user["name"] === name
    );
};

const findUsersById = (id) => users["users_list"].find((user) => user["id"]===id);

const addUser = (user) => {
    users["users_list"].push(user);
    console.log(user);
    return user;
};

const deleteUser = (id)=> {
    let findUser = findUsersById(id);
    console.log(findUser)
    if (findUser !== undefined){
        users= users["users_list"].filter(
            (user) => user["id"] !== id
        );
        return(users);
    }else
        return undefined;
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
    const name = req.query.name;
    const id = req.query.id;
    if (name != undefined){
        let result = findUsersByName(name);
        //result = {users_list:result};
        res.send(result);
    }
     else {
    res.send(users);
    }
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    let result = findUsersById(id);
    if (result === undefined){
        res.status(404).send("Resource not found.");
    } else{
        res.send(result);
    }
});

//app.get("/users/:id", async (req, res) => {
//    promise = new Promise(
//        (fulfill, reject) => {
//            let result = findUsersById(id);
//            if (result === undefined){
//                reject(res.status);
//            }else fulfill(result);
//        }
//    )
//    promise.then(
//        (resultFred) => {
//            res.send(resultFred);}
//        ).catch (
//            (errCode) =>{
//                res.status(errCode).send("");
//            }
//        )
//            
//});

app.post("/users", (req, res)=> {
    const user = req.body;
    addUser(user);
    res.send();
});

app.delete("/users/:id", (req, res) =>{
    const userid = req.params.id
    console.log(userid);
    let result = deleteUser(userid);
    if (deleteUser !== undefined){
        res.status(200).send(result);
    }else {
        res.status(404).send("User not found.");
    }
});

app.listen(port, () =>{
    console.log(
        'Example app listening at http://localhost:8000'
    );
});