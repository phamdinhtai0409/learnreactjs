const { json } = require('express');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')

var db = require('../mongo_model/mongo_model')
var {authJWT} = require('../middleware/authjwt')

/* GET home page. */

router.post('/login' , async (req,res)=>{
  let {username , password} = req.body;
  let dataWithUsername = await db.accountad.findOne({username});
  if(dataWithUsername){
        let result  = await bcrypt.compare(password , dataWithUsername.password);
        if(result === true){
            let token = jwt.sign(dataWithUsername.username ,process.env.SCRET_KEY)
            res.status(200).json({
              success : true ,
              token,
              user : dataWithUsername.username
            })
        }
        else{
          res.status(404).json({
            succes : false ,
            message : 'Password invalid'
          })
        }
  }
  else{
    res.status(404).json({
      success : false ,
      message : 'Username invalid'
    })
  }
})

router.get('/get_post_restaurant' , authJWT , async(req,res)=>{
  try{
    let data = await db.profile.find();
    res.status(200).json({
      success : true ,
      profile : data
    })
  }
  catch (err){
    res.status(400).end()
  }
})

router.get('/get_detail_post/:id' , authJWT , async(req,res)=>{
  let {id} = req.params ;
  try{
    let data = await db.profile.findOne({_id : id})
    res.status(200).json({
      success : true ,
      profile : data
    })
  }
  catch (err){
    res.status(400).json({
      success : false ,
      message : 'Error'
    })
  }

})

router.delete("/delete_post_restaurant/:id" , authJWT , async(req,res)=>{
  let {id} = req.params;
  await db.profile.remove({_id : id})
  res.status(204).json({
    success :false ,
    message : 'Error'
  })
})

router.get('/get_account_res', authJWT, async (req,res) => {
  let data = await db.accountRes.find()
 res.status(200).json(data)
})




router.get('/get_account_res/:id' , authJWT , async (req,res)=>{
  let {id} = req.params ; 
  let data = await db.accountRes.findOne({_id : id});
  res.status(200).json({
    success : true ,
    data
  })
})

router.post('/create_account_res' , authJWT , async (req,res)=>{
  let {username , password ,phone ,address , fullname} = req.body
  let data = await db.accountRes.findOne({username});
  if(data){
      res.status(404).json({
        success : false ,
        message : 'username already exists'
      })
  }
  else{
    let hashPass = await bcrypt.hash(password , 10)
    let dataCreate = await db.accountRes.create({username , password : hashPass , phone , address , fullname , status : 'Waiting'})
    res.status(201).json({
      success : true , 
      dataCreate
    })
  }

})
router.put('/update_account_res/:id' , authJWT , async(req,res)=>{
  let {id} = req.params ;
  let {username,password , fullname , phone , address} = req.body;
  let hashPass = await bcrypt.hash(password , 10)
  await db.accountRes.updateOne({_id : id} , {username , password : hashPass , fullname , phone , address})
  res.status(203).json({
    success : true , 
    message : 'Updated'
  })
})

router.delete('/delete_account_res/:id' , authJWT , async(req,res)=>{
  let {id} = req.params ;
  await db.accountRes.remove({_id : id});
  res.status(204).json({
    success : true ,
    message : 'Deleted'
  })
})





module.exports = router;
