var jwt = require('jsonwebtoken')

module.exports.authJWT = (req,res,next)=>{
        if(!req.headers['authorization']){
            res.status(404).json({
                success : false ,
                message : 'No token'
            })
        }
        else{
            let token = req.headers['authorization'].split(' ')[1]
            try{
                let data = jwt.verify(token , process.env.SCRET_KEY)
                res.locals.user = data
                next()
            }
            catch (err){
                res.status(404).json({
                    success : false ,
                    message : 'Token invalid'
                })
            }
            
        }
}

