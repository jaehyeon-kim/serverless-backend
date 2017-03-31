import json

print('Loading function')

def lambda_handler(event, context):
    print('Received event: ' + json.dumps(event, indent=2))
    name = event['name'] if 'name' in event else 'World'
    print('name =', name);
    greetings = 'Hello ' + name + '!'
    print(greetings)
    return greetings