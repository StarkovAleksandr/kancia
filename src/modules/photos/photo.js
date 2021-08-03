import mongoose from 'mongoose';

const Photo = new mongoose.Schema({
  albumId: { type: Number, required: true },
  // albumId: { ref: 'album', type: mongoose.Schema.Types.ObjectId },
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
});

export default mongoose.model('Photo', Photo);
