import mongoose from 'mongoose';

import { autoIncrementIndex } from '../last-id/auto-increment-index.js';

const comment = new mongoose.Schema({
  _id: { type: Number },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
  post: { type: mongoose.Schema.Types.Number, ref: 'Post' },
});

autoIncrementIndex('Comment', comment);

export default mongoose.model('Comment', comment);
