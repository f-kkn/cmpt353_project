const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');

//connections for express
const port = 8080;
const host = '0.0.0.0';
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));


//Connection for mysql
var dbName = "webdb";
var tableName = "posts";

const connection = mysql.createConnection({
    host: "database",
    user: "root",
    password: "admin",
    port: 3306
});

connection.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected");
});

// app.get('/init', (req, res) => {
//     var queryCreateDatabase = `CREATE DATABASE IF NOT EXISTS ${dbName}`;
//     connection.query(queryCreateDatabase, (err) => {
//         // if(err) res.status(400).send("Server cannot create a database.");
//         if(err) console.log(err);

//         console.log(`[SERVER] : database \'${dbName}\' created.`);
//     });

//     let getDatabase = `USE ${dbName}`;
//     let checkTable = `DROP TABLE IF EXISTS ${tableName}`;
//     let addTable = `CREATE TABLE IF NOT EXISTS ${tableName} (
//         id          int unsigned NOT NULL auto_increment,
//         topic       varchar(100) NOT NULL,
//         data        varchar(100) NOT NULL,
//         PRIMARY KEY (id))`;
//     connection.query(getDatabase, (err) => { //select the database first
//         // if(err) res.status(400).send("Server cannot get the database.");
//         if(err) console.log(err);

//         console.log(`[SERVER] : Working with ${dbName} database.`);
//         connection.query(checkTable, (err) => { //then, check if the table exists. Delete if it does.
//             // if(err){throw err;}
//             if(err) console.log(err);

//             console.log(`[SERVER] : Deleting contents of ${tableName}.`);
//         });
//         connection.query(addTable, (err) => { //Create the table
//             // if(err) res.status(400).send("Server cannot add the table to database.");
//             if(err) console.log(err);

//             console.log(`[SERVER] : Creating table ${tableName}.`);
//         });
//     });
//     res.json({resp: "complete"}); 
// });

// app.post('/sendToDB', (req, res) => {
//     let insertPostQuery = `INSERT INTO ${tableName}(topic,data) VALUES('${req.body.postTopic}','${req.body.postMsg}')`;
//     connection.query(insertPostQuery, (err) => {
//         if(err) res.status(400).send('Failed to insert post');
//         else{
//             res.json({resp: "Post successful"});
//             console.log("[SERVER] : Post successfully saved to database.");
//         }
//     });
// });

// app.get('/sendToClient', (req, res) => {
//     let useTable = `SELECT * FROM posts`;
//     connection.query(useTable, (err, rows) => {
//         if(err) res.status(400).send('Failed to send posts to client');
//         else{
//             console.log(`Sending ${rows}`);
//             res.send(JSON.parse(JSON.stringify(rows)));
//             console.log("[SERVER] : All posts sent to client.");
//         }
//     })
// });

app.listen(port, host);
console.log(`HOST ${host} listening on PORT ${port}`);