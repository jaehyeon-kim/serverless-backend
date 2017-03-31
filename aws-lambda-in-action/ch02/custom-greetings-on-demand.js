console.log('Loading function');

exports.handler = (event, context, callback) => {
    console.log('Received event: ', JSON.stringify(event, null, 2));
    var greet = ('greet' in event) ? event.greet : 'Hello';
    var name = ('name' in event) ? event.name : 'World';
    var greetings = greet + ' ' + name + '!';
    console.log(greetings);
    callback(null, greetings);
};