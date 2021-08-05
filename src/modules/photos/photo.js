import mongoose from 'mongoose';

const Photo = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  album: { type: mongoose.Schema.Types.Number, ref: 'Album' },
});

export default mongoose.model('Photo', Photo);
