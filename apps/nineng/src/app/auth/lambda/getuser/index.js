'use strict'
const AWS = require('aws-sdk');
// const dynamodb = new AWS.DynamoDB({region: 'ap-northeast-2', apiVersion: '2012-08-10'})
AWS.config.update({
  region: 'ap-northeast-2'
});

exports.handler = async (event, context, callback) => {
  const ddb = new AWS.DynamoDB({
    apiVersion: '2012-08-10'
  });
  const documentClient = new AWS.DynamoDB.DocumentClient({
    region: 'ap-northeast-2'
  });

  let responseBody = "";
  let statusCode = 0;

  const {
    id
  } = event.pathParameters;
  const params = {
    TableName: "user",
    Key: {
      id: id
    }
  }

  try {
    const data = await documentClient.get(params).promise();
    responseBody = JSON.stringify(data.Item);
    statusCode = 200;

  } catch (err) {
    responseBody = '사용자 데이타 검색 실패... ';
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
