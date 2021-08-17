import mongoose from 'mongoose';

const Photo = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  album: { type: mongoose.Schema.Types.Number, ref: 'Album' },
});

Photo.pre('save', () => {
  console.log(`Create new photo`);
});

export default mongoose.model('Photo', Photo);
