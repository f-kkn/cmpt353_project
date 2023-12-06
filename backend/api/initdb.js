exports.init = (conn, dbName, userTable, channelTable, postTable) => {
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
                channelData varchar(256) NOT NULL,
                user_id int unsigned,
                PRIMARY KEY (channel_id),
                FOREIGN KEY (user_id) REFERENCES users (user_id))`;

    let addPostTable = `CREATE TABLE IF NOT EXISTS ${postTable} (
                post_id int unsigned NOT NULL auto_increment,
                postName varchar(100) NOT NULL,
                postData varchar(256) NOT NULL,
                channel_id int unsigned,
                PRIMARY KEY (post_id),
                FOREIGN KEY (channel_id) REFERENCES channels (channel_id))`;
                
    conn.query(createDB, (err) => {
        if(err){
            throw `Server cannot create a database.`;
        }
        console.log(`Database \'${dbName}\' created.`);
    });
    conn.query(getDatabase, (err) => {
        if(err){
            throw `${err.message}`;
        }
        conn.query(addUsrTable, (err) => {
            if(err){
                throw `${err.message}`;
            }
            console.log(`Table ${userTable}. created`);
        });
        conn.query(addChannelTable, (err) => {
            if(err){
                throw `${err.message}`;
            }
            console.log(`Table ${channelTable}. created`);
        });
        conn.query(addPostTable, (err) => {
            if(err)
                throw `${err.message}`;
            console.log(`Table ${postTable}. created`);
        });
    });

    console.log(`Database initialization complete!`);
}