const db = require('../models')
const bcrypt = require('bcrypt')

const register = (req, res) => {
    
    if(!req.body.email || ! req.body.password) {
        return res.status(400).json({
            status : 400,
            message : 'Please enter a name and password'
        })
    }

    db.User.findOne({ email : req.body.email},(err,foundUser)=>{


        if(err) return res.status(500).json({
            status:500,
            message: `There is error here ${err}` 
        })
            
        

        if(foundUser) return res.status(400).send({
            status : 400,
            message : 'This name already exists. Please try with new one '
        })

        bcrypt.genSalt(10,(err,salt) => {
            if(err) return res.status(550).json({
                status : 550, 
                message : `Error here ${err}`
            })

            bcrypt.hash(req.body.password,salt, (err,hash) => {
                if(err) return res.status(530).json({
                    status : 530,
                    message : `Hash errror ${err}`
                })

                const newUser = {
                email : req.body.email,
                password : hash,
                address : req.body.address
                }

                db.User.create(newUser, (err, savedUser)=> {
                 if(err)  return res.status(510).json({status:510, message : `There is a problem with creatin user ${err}`})
                 
                 res.json(savedUser)
                        
                })

            })
        })
    })
}

const login = (req ,res ) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({status : 400, message : 'Please enter your email and password'})
    }

    db.User.findOne({email:req.body.email}, (err,foundUser) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });

        if(!foundUser) {
            if (err) return res.status(500).json({ status: 500, message: 'email or password is incorret' });
        }

        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
            if (err) return res.status(500).json({ status: 500, message: 'Try with another password' });

            if(isMatch) {
                req.session.currentUser = {id : foundUser._id}
                return res.status(200).json({status: 200, message : "Succes", data : foundUser._id})
            } else {
                return res.status(400).json({ status: 400, message: 'email or password is incorret' });
            }
        })
    })
}                                          

const logout = (req, res) => {
    if(!req.session.currentUser) return res.status(401).json({status :401, message : 'Unauthorized'})

    req.session.destroy((err)=> {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again' });
        res.sendStatus(200)
    })
}

const verify = (req, res) => {
    if(!req.session.currentUser) return res.status(401).json({status : 401, message: 'Unauthorized'})
    res.status(200).json({
        status : 200,
        message : `Current user verified. User ID : ${req.session.currentUser.id}`,
        currentUser : req.session.currentUser
    })
}

const getUser=(req,res)=>{
    db.User.findById(req.params.id,(err,foundUser)=>{
        if(err){
            return res.status(400).json({status: 400, error: 'Did not find this user, please try again'});
        }
        res.json(foundUser)
    })
}


const update=(req,res) => {
    db.User.findByIdAndUpdate(req.params.id,req.body, {new : true},(err,updatedProfile)=> {
        if (err) return err
    
        res.json(updatedProfile)
    })
}

module.exports  = {
    register,
    login,
    verify,
    logout,
    update,
    getUser
}