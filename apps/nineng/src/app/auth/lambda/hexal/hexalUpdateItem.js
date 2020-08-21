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

  const params = {
    TableName: "products",
    Key: {
      "id": id
    },
    UpdateExpression: "set productName = :n",
    ExpressionAttributeValues: {
      ":n": "Water pumps"
    },
    ReturnValues: "UPDATED_NEW"
  };

  try {

    const data = await documentClient.update(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    responseBody = '사용자 데이타 갱신 실패... ';
    statusCode = 403;
  }


  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json"
    },
    body: responseBody
  }

  return response;

}
