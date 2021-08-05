import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
});

export default mongoose.model('Post', Post);
