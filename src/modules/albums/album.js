import mongoose from 'mongoose';

const Album = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
});

export default mongoose.model('Album', Album);
