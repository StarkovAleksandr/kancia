import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

export default mongoose.model('Post', Post);
