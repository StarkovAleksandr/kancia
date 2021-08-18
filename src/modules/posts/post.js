import mongoose from 'mongoose';

import { autoIncrementIndex } from '../last-id/auto-increment-index.js';
import Comment from '../comments/comment.js';

const post = new mongoose.Schema({
  _id: { type: Number },
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
});

autoIncrementIndex('Post', post);

post.pre('deleteOne', async function (next) {
  const self = this;

  await Comment.deleteMany({ post: self._conditions._id });

  next();
});

post.pre('deleteMany', async function (next) {
  const self = this;

  await Comment.deleteMany({ user: self._conditions._id });

  next();
});

export default mongoose.model('Post', post);
