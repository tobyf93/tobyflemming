const request = require('request');
const parseXML = require('xml2js').parseString;

request('https://s3-ap-southeast-2.amazonaws.com/tobyflemming', (err, res, body) => {
  parseXML(body, (err, result) => {
    result.ListBucketResult.Contents.forEach(file => {
      console.log(file.Key[0]);
    });

  })
});
