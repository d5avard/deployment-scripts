// listBucket
// deleteBucket

var AWS = require('aws-sdk');

const config = require("./config").config
const service = require("./api/s3-service").service
const listBucket = require("./api/list-bucket").listBucket

filter = "test"
listBucket(service)
  .then(result => {
    let list = result.result.Buckets.filter(element => {
      return element.Name.indexOf(filter) > -1
    })
  })

  // createBucket(service, config.name, config.region)
  //   .then(data => {
  //     console.log("createBucket:", data)
  //     return putBucketWebSite(service, data.bucket)
  //   }).then(data => {
  //     console.log("putBucketWebSite:", data)
  //     return putBucketPolicy(service, data.bucket)
  //   }).then(data => {
  //     console.log("putBucketPolicy:", data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
