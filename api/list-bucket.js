var AWS = require('aws-sdk')
const service = require("./s3-service").service

function listBucketWithPrefixe(server, prefixe) {
  params = {}
  service.getInstance()
    .listBuckets(params, function(error, result) {
      if(error) {
        reject(error)
      } else {
        resolve(filterListwithPrefix(result, prefixe))
      }
    })
}

function listBucket(service) {
  return new Promise(function (resolve, reject) {
    params = {}
    service.getInstance()
      .listBuckets(params, function(error, result) {
        if (error) {
          reject(error)
        } else {
          resolve({
            result : result
          })
        }
      })
    })
  }

  module.exports = { listBucket }


