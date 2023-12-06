exports.create = (conn, table, postName, postData, userCreds) => {
    let addPost = `INSERT INTO ${table}(postName, postData, channel_id) VALUES('${postName}', "${postData}", ${userCreds.cid})`;
    conn.query(addPost, (err) => {
        if(err) throw err;
        console.log(`User ${userCreds.cid} added into Posts table: ${postName} post.`);
    });
}