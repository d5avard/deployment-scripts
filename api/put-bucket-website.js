var AWS = require('aws-sdk')

function putBucketWebsite(service, name) {
  return new Promise(function (resolve, reject) {
    const staticHostParams = {
      Bucket: name,
      WebsiteConfiguration: {
        ErrorDocument: {
          Key: 'error.html'
        },
        IndexDocument: {
          Suffix: 'index.html'
        },
      }
    }
    service.getInstance()
      .putBucketWebsite(staticHostParams, function(err, data) {
        if (err) {
          reject(err)
        } else {
          resolve({
            bucket : name,
            data : data
          })
        }
      })
  })
}

module.exports = { putBucketWebsite }
