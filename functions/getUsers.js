// 
exports.handler = function(event, content, callback) {
    const { name } = JSON.parse(event.body);
    //returns to the user, takes possible error, and res to be sent to the user
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({msg: `Hello, ${name}`})
    })
}