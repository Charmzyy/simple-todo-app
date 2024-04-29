const bcrypt = require('bcrypt')
const {User} = require('../../models')
const generateAccessToken = require('../../utils/generateToken')

const login = async (req,res) =>{
    try {
        
        const user = await User.findOne({email: req.body.email})

        if(!user){
            res.status(404).json({message: "User Not Found"})
        }

        

        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if(!isMatch){
            res.status(401).json({message: "Password Incorrect"})

        }

        const token = generateAccessToken({ user: user.id });

        res.status(200).json({message: "Login Successful", token})


    } catch (error) {
        
    res.status(500).json({message: error.message});
    }

}


module.exports = login 