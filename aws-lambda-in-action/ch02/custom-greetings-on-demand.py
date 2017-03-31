import json

print('Loading function')

def lambda_handler(event, context):
    print('Received event: ' + json.dumps(event, indent=2))
    greet = event['greet'] if 'greet' in event else 'Hello'
    name = event['name'] if 'name' in event else 'World'
    greetings = greet + ' ' + name + '!'
    print(greetings)
    return greetings