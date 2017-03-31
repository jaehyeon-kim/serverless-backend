print('Load function')

def lambda_handler(event, context):
    print('IP ' + event['myip'])
    return event['myip']