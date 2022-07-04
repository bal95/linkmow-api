const _=require('lodash')
const urlModule=require('valid-url')

const payload='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const keygen=()=>{
    let key=''
    for(let i=1;i<=7;i++) key+=payload.charAt(_.random(0,payload.length-1))
    return key
}

const insertKey= async (req,res,getDataByKey,addData)=>{
    const {website}=req.body
    if(!urlModule.isUri(website)) return res.json("Invalid Website!")
    try{
        let key=''
        while(true){
            key=keygen()
            const result=await getDataByKey(key)
            if(Object.keys(result).length===0) break
        }
        await addData({key:key,website:website})
        res.json(key)
    }
    catch(err){
        res.status(500).json("Something went wrong!")
    }
}

module.exports={
    insertKey,
}