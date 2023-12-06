exports.init = (conn, dbName, userTable, channelTable) => {
    let createDB = `CREATE DATABASE IF NOT EXISTS ${dbName}`;

    let getDatabase = `USE ${dbName}`;

    let addUsrTable = `CREATE TABLE IF NOT EXISTS ${userTable} (
            user_id int unsigned NOT NULL auto_increment,
            userName varchar(100) NOT NULL,
            passWord varchar(100) NOT NULL,
            name varchar(100) NOT NULL,
            PRIMARY KEY (user_id))`;

    let addChannelTable = `CREATE TABLE IF NOT EXISTS ${channelTable} (
                channel_id int unsigned NOT NULL auto_increment,
                channelName varchar(100) NOT NULL,
                user_id int unsigned,
                PRIMARY KEY (channel_id),
                FOREIGN KEY (user_id) REFERENCES users (user_id))`;
                
    conn.query(createDB, (err) => {
        if(err){
            throw `Server cannot create a database.`;
        }
        console.log(`[SERVER] : database \'${dbName}\' created.`);
    });
    conn.query(getDatabase, (err) => {
        if(err){
            throw `${err.message}`;
        }
        conn.query(addUsrTable, (err) => {
            if(err){
                throw `${err.message}`;
            }
            console.log(`[SERVER] : Table ${userTable}. created`);
        });
        conn.query(addChannelTable, (err) => {
            if(err){
                throw `${err.message}`;
            }
            console.log(`[SERVER] : Table ${channelTable}. created`);
        });
    });

    console.log(`Database initialization complete!`);
}