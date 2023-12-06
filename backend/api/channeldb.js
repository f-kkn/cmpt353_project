exports.create = (conn, channelName, channelData, userID, table) => {
    let addTable = `INSERT INTO ${table}(channelName, channelData, user_id) VALUES('${channelName}', "${channelData}", ${userID})`;
    conn.query(addTable, (err) => {
        if(err) throw err;
        
        console.log(`User ${userID} added into Channel table: '${channelName} channel.'`);
    });
}

exports.show = (conn, user_ID, callback) => {
    let getTable = `SELECT * FROM channels WHERE user_id=('${user_ID}')`;
    conn.query(getTable, (err, res) => {
        if(err)
            throw err;
        if(res.length == 0){
            callback(null, true);
        } else{
            callback(null, false, res);
        }
    })
}