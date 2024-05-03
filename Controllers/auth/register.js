const bcrypt = require('bcrypt')
const {User} = require('../../models/')



const register = async (req,res) => {
   const existingUsers = User.find();
   const firstUser = existingUsers.length ===0;
   
try {
 
const hashedPassword = await bcrypt.hash(req.body.password,10)
const newUser = await User.create({
   fname : req.body.fname,
   lname : req.body.lname,
   email : req.body.email,
   password : hashedPassword
});

if(firstUser)
User.roles = ['admin']

await newUser.save();


res.status(200).json({ newUser });


} catch (error) {
   res.status(500).json({message: error.message}) 
}
}

module.exports = register