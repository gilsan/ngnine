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
    }
  }

  try {

    const data = await documentClient.get(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    responseBody = '사용자 데이타 검색 실패... ';
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

/*******
 * For Nodejs Lambda 
 * 'event.headers', 
 * 'event.pathParameters', 
 * 'event.body', 
 * 'event.stageVariables',
 * 
 * 'event.requestContext'
 */
