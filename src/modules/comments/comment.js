import mongoose from 'mongoose';

const Comment = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
  post: { type: mongoose.Schema.Types.Number, ref: 'Post' },
});

Comment.pre('save', () => {
  console.log(`Create new comment`);
});

export default mongoose.model('Comment', Comment);
