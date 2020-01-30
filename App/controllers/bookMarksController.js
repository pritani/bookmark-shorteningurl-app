const hash=require('shorthash')
const BookMark=require('../models/bookmark')

module.exports.list=(req,res)=>{
    BookMark.find()
    .then((book)=>{
        res.json(book)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    Note.findById(id)
    .then((book)=>{
        if(book){
            res.json(book)
        }
        else{
            res.json({})
        }
    })
}
module.exports.create=(req,res)=>{
    const body=req.body
    console.log(body)//{ title: 'How to be become a full stack developer',
   // original_url:
    // 'https://dctacademy.com/2018/05/become-full-stack-javascript-developer/',
    //tags: [ 'javascript', 'mern', 'full stack developer' ] }
   
    const hash_url=(hash.unique(req.body.original_url))
    console.log(hash_url)//vpcA6
    const hash_obj=Object.assign({},body,{hashed_url:hash_url})
    const bookMark=new BookMark(hash_obj)
//     const hash_obj=Object.assign({},bookMark,{hashed_url:hash_url})
//    const hash=new Has(hash_obj)
    bookMark.save()
    .then((book)=>{
        res.json(book)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    BookMark.findByIdAndUpdata(id,body,{new:true,runValidators:true})
.then((book)=>{
    if(book){
        res.json(book)
    }
    else{
        res.json({})
    }
})
.catch((err)=>{
    res.json(err)
})
}