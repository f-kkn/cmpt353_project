exports.create = (conn, channelName, userID, table) => {
    let addTable = `INSERT INTO ${table}(channelName, user_id) VALUES('${channelName}', ${userID})`;
    conn.query(addTable, (err) => {
        if(err) throw err;
        
        console.log(`User ${userID} added into Channel table: '${channelName} channel.'`);
    });
}