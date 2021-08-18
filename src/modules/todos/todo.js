import mongoose from 'mongoose';

import { autoIncrementIndex } from '../last-id/auto-increment-index.js';

const todo = new mongoose.Schema({
  _id: { type: Number },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
});

autoIncrementIndex('Todo', todo);

export default mongoose.model('Todo', todo);
