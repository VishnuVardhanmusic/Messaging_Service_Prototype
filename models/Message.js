import mongoose from "mongoose"

// Message Database is responsible for
// 1) Collect content of message used in chatting
// 2) Timestamp attribute in order to display the time of arrival of the message
// 3) Sender details which will be used later to implement real-time chat updates

const MessageSchema = new mongoose.Schema({
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },  
  text: {
    type: String,
    default: "",
  },
  photo: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  seenBy: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    default: []
  }
})

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema)

export default Message