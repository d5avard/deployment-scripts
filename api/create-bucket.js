var AWS = require('aws-sdk');
var uuid = require('uuid');

const Regions = {
  EU: "EU",
  EUWEST1: "eu-west-1",
  USEAST1: "us-east-1",
  USWEST1: "us-west-1",
  USWEST2: "us-west-2",
  APSOUTH1: "ap-south-1",
  APSOUTHEAST1: "ap-southeast-1",
  APSOUTHEAST2: "ap-southeast-2",
  APNORTHEAST1: "ap-northeast-1",
  SAEAST1: "sa-east-1",
  CNNORTH1: "cn-north-1",
  EUCENTRAL: "eu-central-1"
}

function createBucket(service, name, region) {
  if (name.length <= 0) {
    throw new Error("Bucket name is not valid.")
  }
  const bucketName = `${name}-${uuid.v4()}`
  return create(service, bucketName, region)
}

function createBucketWithoutSuffix(service, name, region) {
  if (name.length <= 0) {
    throw new Error("Bucket name is not valid.")
  }
  return create(service, name, region)
}

function create(service, name, region) {
  return new Promise(function (resolve, reject) {
    const params = {
      Bucket: name,
      ACL : 'public-read'
    }
    if (region !== Regions.USEAST1) {
      params.CreateBucketConfiguration = {
        LocationConstraint: region
      }
    }
    service.getInstance()
      .createBucket(params, function(error, result) {
        if (error) reject(error)
        else resolve({
          bucket : bucket,
          result : result
        })
      })
  })
}

module.exports = { Regions,
                   createBucket,
                   createBucketWithoutSuffix}
