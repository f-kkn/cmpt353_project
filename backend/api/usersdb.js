exports.checkUser = (conn, userName, table, callback) => {
    let checkUsr = `SELECT * FROM ${table} WHERE username = '${userName}'`;
    conn.query(checkUsr, (err, res) => {
        if(err){
            throw `There was an error retrieving ${userName}`;
        }
        if(res.length == 0){
            callback(null, false);
        }
        else{
            callback(null, true);
        }
    });
};

exports.createUser = (conn, userName, passWord, table) => {
   let usr = `INSERT IGNORE INTO ${table}(userName, passWord) VALUES('${userName}', '${passWord}')`;
    conn.query(usr, (err) => {
        if(err){
            throw `There was an error creating ${userName}`
        }
    });
}
