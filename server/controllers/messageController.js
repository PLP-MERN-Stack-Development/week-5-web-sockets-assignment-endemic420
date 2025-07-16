const Message = require ("../models/Message");

exports.getRoomMessages = async (req,res)=>{
    try {
        const messages = await Message.find({Room : req.params.roomId}).populate('sender','username').sort({createdAt : 1});
        res.json(messages)
    } catch (error) {
        res.status(500).json({error: "Server error"})
    }
};

