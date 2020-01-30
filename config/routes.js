const express=require('express')
const router=express.Router()
const bookMarksController=require('../App/controllers/bookMarksController')
const mongoose=require('mongoose')

const BookMark=require('../App/models/bookmark')

router.get('/bookmarks',bookMarksController.list)
router.get('/bookmarks/:id',bookMarksController.show)
router.post('/bookmarks',bookMarksController.create)
module.exports=router