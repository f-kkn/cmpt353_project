exports.create = (conn, channelName, table) => {
    let addTable = `INSERT INTO ${table}(channelName) VALUES('${channelName}')`;
    conn.query(addTable, (err) => {
        if(err) 
            throw `Channel ${channelName} cannot be added to ${table}`;
        
        console.log(`Channel ${channelName} added into table ${table}`);
    });
}