const bcrypt = require('bcrypt')
const {User} = require('../../models')

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

        res.status(200).json({message: "Login Successful"})


    } catch (error) {
        
    }

}


module.exports = login 