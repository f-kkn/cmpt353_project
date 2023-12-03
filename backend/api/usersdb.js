exports.checkUser = (conn, userName, table, callback) => {
    let checkUsr = `SELECT * FROM ${table} WHERE username = '${userName}'`;
    conn.query(checkUsr, (err, res) => {
        if(err){
            throw `There was an error retrieving ${userName}`;
        }
        if(res.length == 0){
            callback(null, false);
        } else{
            callback(null, true);
        }
    });
};

exports.createUser = (conn, userName, passWord, name, table) => {
   let usr = `INSERT INTO ${table}(userName, passWord, name) VALUES('${userName}', '${passWord}', '${name}')`;
    conn.query(usr, (err) => {
        if(err){
            throw `There was an error creating ${userName}`;
        }
        console.log(`User ${userName} added into table ${table}`);
    });
}

exports.authUser = (conn, userName, passWord, callback) => {
    let findUsr = `SELECT * FROM users WHERE username=('${userName}') AND password=('${passWord}')`;
    conn.query(findUsr, (err, res) => {
        if (err){
            throw `There was an error retrieving ${userName}`;
        }
        if(res.length == 0){
            callback(null, false);
        } else{
            callback(null, true);
        }
    });
}
