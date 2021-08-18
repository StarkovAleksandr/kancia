import mongoose from 'mongoose';

import { autoIncrementIndex } from '../last-id/auto-increment-index.js';

const post = new mongoose.Schema({
  _id: { type: Number },
  title: { type: String, required: true },
  body: { type: String, required: true },
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
});

autoIncrementIndex('Post', post);

export default mongoose.model('Post', post);
