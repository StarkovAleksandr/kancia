import mongoose from 'mongoose';

import { autoIncrementIndex } from '../last-id/auto-increment-index.js';
import Photo from '../photos/photo.js';

const album = new mongoose.Schema({
  _id: { type: Number },
  title: { type: String, required: true },
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
});

autoIncrementIndex('Album', album);

album.pre('deleteOne', async function (next) {
  const self = this;

  await Photo.deleteMany({ album: self._conditions._id });

  next();
});

album.pre('deleteMany', async function (next) {
  const self = this;

  await Photo.deleteMany({ user: self._conditions._id });

  next();
});

export default mongoose.model('Album', album);
