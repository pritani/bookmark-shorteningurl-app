const express=require('express')
const router=require('./config/routes')
const setupDB=require('./config/database')

const app=express()
app.use(express.json())
const port=3065

setupDB()
 
app.get('/',(req,res)=>{
    res.json({
        notice:'welcome to the website'
    })
}) 
app.use('/',router)
app.listen(port,()=>{
    console.log('listening on port',port)
})