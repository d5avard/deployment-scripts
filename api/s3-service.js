var AWS = require('aws-sdk');

const service = {
  instance : null,
  getInstance : function () {
    if (this.instance) return this.instance
    return this.instance = new AWS.S3({apiVersion: '2006-03-01'})
  }
}

module.exports = { service }
