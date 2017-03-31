console.log('Load function');

exports.handler = (event, context, callback) => {
    console.log('IP ', event.ip);
    callback(null, event.myip);
}