const redirectLink=async (req,res,getDataByKey)=>{
    try{
        const {key}=req.params
        const result=await getDataByKey(key)
        return res.redirect(result.Item.website)
    }
    catch{
        return res.status(500).json('Something went wrong!')
    }
}

module.exports = {
    redirectLink,
}