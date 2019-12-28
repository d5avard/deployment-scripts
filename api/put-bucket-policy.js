var AWS = require('aws-sdk')

function putBucketPolicy(service, name) {
  return new Promise(function (resolve, reject) {
    const readOnlyAnonymousUserPolicy = {
      Version: "2012-10-17",
      Statement: [
        {
          Effect: "Allow",
          Principal: "*",
          Action: [
            "s3:GetObject"
          ],
          Resource: [
            ""
          ]
        }
      ]
    }

    const resource = `arn:aws:s3:::${name}/*`
    readOnlyAnonymousUserPolicy.Statement[0].Resource[0] = resource;
    const bucketPolicy = {
      Bucket: name,
      Policy: JSON.stringify(readOnlyAnonymousUserPolicy)
    };

    service.getInstance()
      .putBucketPolicy(bucketPolicy, function(error, data) {
        if (error) {
          reject(error)
        } else {
          resolve({
            bucket: name,
            data: data
          })
        }
      });
  })
}

module.exports = { putBucketPolicy }
