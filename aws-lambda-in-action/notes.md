#### resources
* [velocity template](https://velocity.apache.org/)
* [API Gateway API Request and Response Payload-Mapping Template Reference](http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html)
* [S3 access control](http://docs.aws.amazon.com/AmazonS3/latest/dev/s3-access-control.html)
* [DynamoDB access control](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/authentication-and-access-control.html)
* [DynamoDB region](http://docs.aws.amazon.com/general/latest/gr/rande.html#ddb_region)
* [Policy variables](http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_variables.html)

#### commands
* `aws lambda list-functions`
* `aws lambda invoke --function-name customGreetingsOnDemandPY --payload '{"greet": "Hi", "name": "Jaehyeon"}' output.txt`

#### curl
* add double quotations if multiple query strings
                - `curl "https://base-url/dev/say?name=Jaehyeon&greet=Hi"`

