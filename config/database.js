const mongoose=require('mongoose')
const setupDB=()=>{
    mongoose.connect('mongodb://localhost:27017/short-url-app',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log('error',err)
    })
}
module.exports=setupDB