// createbucketforstaticwebsite OK
  // createBucketWebSite OK
  // putBucketWebSite OK

var AWS = require('aws-sdk');

const config = require("./config").config
const service = require("./api/s3-service").service
const createBucketWithoutSuffix = require("./api/create-bucket").createBucketWithoutSuffix
const putBucketWebSite = require("./api/put-bucket-website").putBucketWebsite
const putBucketPolicy = require("./api/put-bucket-policy").putBucketPolicy

createBucketWithoutSuffix(service, config.name, config.region)
  .then(data => {
    console.log("createBucket:", data)
    return putBucketWebSite(service, data.bucket)
  }).then(data => {
    console.log("putBucketWebSite:", data)
    return putBucketPolicy(service, data.bucket)
  }).then(data => {
    console.log("putBucketPolicy:", data)
  })
  .catch(err => {
    console.log(err)
  })
