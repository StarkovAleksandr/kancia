import mongoose from 'mongoose';

import { autoIncrementIndex } from '../last-id/auto-increment-index.js';

const photo = new mongoose.Schema({
  _id: { type: Number },
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  album: { type: mongoose.Schema.Types.Number, ref: 'Album' },
});

autoIncrementIndex('Photo', photo);

export default mongoose.model('Photo', photo);
