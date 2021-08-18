import mongoose from 'mongoose';

import { autoIncrementIndex } from '../last-id/auto-increment-index.js';

const album = new mongoose.Schema({
  _id: { type: Number },
  title: { type: String, required: true },
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
});

autoIncrementIndex('Album', album);

export default mongoose.model('Album', album);
