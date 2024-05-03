const getTrial = (req, res) => {
    try {
        const User = req.user;
        return res.status(200).json(User)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports= getTrial;