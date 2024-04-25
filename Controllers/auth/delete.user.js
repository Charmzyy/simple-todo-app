const {User} = require('../../models')

const deleteUser = async (req,res) => {
    try {
        const id = req.params;
    const user = await User.findByIdAndDelete(id);

    if(!user){
        res.status(404).json({message:"User Not Found"})
    }
    res.status(200).json({message: "User Deleted"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    const id = req.params;
    const user = await User.findByIdAndDelete(id);

    if(!user){
        res.status(404).json({message:"User Not Found"})
    }
    res.sta

}

module.exports = deleteUser;