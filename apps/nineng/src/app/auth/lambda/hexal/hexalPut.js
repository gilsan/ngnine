'use strict'
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-northeast-2'
});

exports.handler = async (event, context, callback) => {
  new AWS.DynamoDB({
    apiVersion: '2012-08-10'
  });
  const documentClient = new AWS.DynamoDB.DocumentClient({
    region: 'ap-northeast-2'
  });

  let responseBody = "";
  let statusCode = 0;

  const {
    id,
    productName
  } = JSON.parse(event.body);


  const params = {
    TableName: "products",
    Item: {
      id: id,
      productName: productName,
    }
  }

  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    responseBody = '사용자 데이타 삭입 실패... ';
    statusCode = 403;
  }


  const response = {
    statusCode: statusCode,
    headers: {
      "myHeader": "test"
    },
    body: responseBody
  }

  return response;

}
