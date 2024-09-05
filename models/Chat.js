import mongoose from "mongoose"

// Chats Database is responsible for 
// 1) Collection of set of all messages of a particular chat
// 2) Collection of all members of a group chat
// 3) Flag to check is it a group chat or normal single user chat
// 4) Timestamp attribute in order to display the time of arrival of the message

const ChatSchema = new mongoose.Schema({
  members: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    default: []
  },
  messages: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message'}],
    default: []
  },
  isGroup: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: ''
  },
  groupPhoto: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastMessageAt: {
    type: Date,
    default: Date.now
  }
})

const Chat = mongoose.models.Chat || mongoose.model('Chat', ChatSchema)

export default Chat