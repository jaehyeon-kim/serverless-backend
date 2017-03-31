console.log('Loading function');

exports.handler = (event, context, callback) => {
    console.log('Received event: ', JSON.stringify(event, null, 2));
    console.log('name =', event.name);
    var name = ('name' in event) ? event['name'] : 'World';
    var greetings = 'Hello ' + name + '!';
    console.log(greetings);
    callback(null, greetings);
}