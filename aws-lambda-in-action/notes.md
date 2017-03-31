#### resources
* [velocity template](https://velocity.apache.org/)
* [API Gateway API Request and Response Payload-Mapping Template Reference](http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html)

#### commands
* `aws lambda list-functions`
* `aws lambda invoke --function-name customGreetingsOnDemandPY --payload '{"greet": "Hi", "name": "Jaehyeon"}' output.txt`

#### curl
* add double quotations if multiple query strings
        + `curl "https://base-url/dev/say?name=Jaehyeon&greet=Hi"`

