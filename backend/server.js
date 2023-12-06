const userdb = require("./api/usersdb");
const channeldb = require("./api/channeldb");
const initdb = require("./api/initdb");

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//connections for express
const port = 8080;
const host = '0.0.0.0';
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
    origin: true,
    credentials: true
}));
app.use('/', express.static(path.join(__dirname, 'public')));


//Connection for mysql
const dbName = "projectdb";
const userTable = "users";
const channelTable = "channels";

const conn = mysql.createConnection({
    host: "database",
    user: "root",
    password: "admin",
    port: 3306
});

conn.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected");
});

/* --------------------- DATABASE ---------------------*/

initdb.init(conn, dbName, userTable, channelTable);

/* --------------------- EXPRESS ---------------------*/
app.post('/usersdb/add', (req, res) => {
    console.log('Adding user to database....');
    userdb.checkUser(conn, req.body.username, userTable, (err, exist) => {
        if(err || exist){
            console.log(`User ${req.body.username} already exists.`);
            res.status(200).send(JSON.stringify("Fail"));
        } else{
            userdb.createUser(conn, req.body.username, req.body.password, req.body.name, userTable);
            res.status(200).send(JSON.stringify("Success"));
        }
    });
});

app.post('/usersdb/auth', (req, res) => {
    console.log('Authenticating user from database....');
    userdb.authUser(conn, req.body.username, req.body.password, (err, authenticate, result) => {
        if(err || !authenticate){
            console.log(`User ${req.body.username} does not exist.`);
            res.status(200).send(JSON.stringify("0"));
        } else{
            res.cookie("user", result[0], {secure: true, path: "/"});
            res.status(200).send(JSON.stringify("1"));
        }
    });
});

app.post('/channeldb/create', (req, res) => {
    console.log("Creating channel...");
    channeldb.create(conn, req.body.channelname, req.body.uid, channelTable);
    res.status(200).send(JSON.stringify("channel created."));
});

app.post('/channeldb/show', (req, res) => {
    console.log(`Requesting to show all channels`);
    channeldb.show(conn, req.body.uid, (err, empty, result) => {
        if(err || empty){
            console.log(`User does not have any channels involved`);
            res.status(400).send(JSON.stringify("No channels."));
        } else{
            res.status(200).send(result);
        }
    });
});

app.listen(port, host);
console.log(`HOST ${host} listening on PORT ${port}`);