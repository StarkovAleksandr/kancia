import mongoose from 'mongoose';

const Album = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
  _id: { type: Number, required: true },
  title: { type: String, required: true },
});

export default mongoose.model('Album', Album);
