const express=require('express')
const cors=require('cors')
const {getDataByKey,addData}=require('./dynamo')
const insert=require('./controllers/insert')
const redirect=require('./controllers/redirect')

const app=express()
app.use(express.json())
app.use(cors())

app.get('/:key',(req,res)=>redirect.redirectLink(req,res,getDataByKey))
app.post('/insert',(req,res)=>insert.insertKey(req,res,getDataByKey,addData))

module.exports=app