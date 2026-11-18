const mongoose = require('mongoose')

function validateObjectId(req,res,next){
    if(!mongoose.Types.ObjectId.isValid(req.params.productId)){
       return res.status(404).json({message:'Product Not Found'}) 
    }
    next()
}

module.exports = validateObjectId