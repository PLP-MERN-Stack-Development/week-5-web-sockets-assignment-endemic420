const Message = require ("../models/Message");

exports.getRoomMessages = async (req,res)=>{
    const messages = await Message.find({Room : req.params.roomId}).populate('sender','username').sort({createdAt : 1});
    res.json(messages)
};

