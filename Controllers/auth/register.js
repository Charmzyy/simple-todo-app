const bcrypt = require('bcrypt')
const {User} = require('../../models/')


const register = async (req,res) => {
try {
const hashedPassword = await bcrypt.hash(req.body.password,10)
const newUser = await User.create({
   email : req.body.email,
   password : hashedPassword
});
res.status(200).json(newUser);
} catch (error) {
   res.status(500).json({message: error.message}) 
}
}

module.exports = register