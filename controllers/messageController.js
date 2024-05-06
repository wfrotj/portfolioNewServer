import Message from "../model/Message.js";

const getAllMessages = async (_req, res) => {
  const messages = await Message.find({});
  res.status(200).json(messages);
};

const createMessage = async (req, res) => {
  try {
    const { name, message, email, subject } = req.body;
    const newMessage = new Message({
      name,
      message,
      email,
      subject,
    });

    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    console.log(error);
  }
};

export default {
  createMessage,
  getAllMessages,
};
