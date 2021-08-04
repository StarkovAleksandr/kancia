import mongoose from 'mongoose';

const Comment = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.Number, ref: 'Post' },
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
});

export default mongoose.model('Comment', Comment);
