const AWS=require('aws-sdk')
require('dotenv').config()

AWS.config.update({
    region: process.env.DEFAULT_REGION,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
})

const dynamoClient=new AWS.DynamoDB.DocumentClient()
const tableName="mapper"

const addData=async(data)=>{
    const params={
        TableName:tableName,
        Item: data,
    }
    await dynamoClient.put(params).promise()
}

const getDataByKey=async(key)=>{
    const params={
        TableName:tableName,
        Key: {key},
    }
    return await dynamoClient.get(params).promise()
}

module.exports={
    addData,
    getDataByKey,
}
