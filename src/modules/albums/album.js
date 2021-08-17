import mongoose from 'mongoose';

import autoIncrementId from '../../common/auto-increment-id/autoIncrementId.js';

const album = new mongoose.Schema({
  _id: { type: Number },
  title: { type: String, required: true },
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
});

autoIncrementId('Album', album);

export default mongoose.model('Album', album);
