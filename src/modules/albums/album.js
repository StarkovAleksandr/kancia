import mongoose from 'mongoose';

const Album = new mongoose.Schema({
  // userId: { ref: 'users', type: mongoose.Schema.Types.Number },
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  user: { ref: 'User', type: mongoose.Schema.Types.Number },
});

export default mongoose.model('Album', Album);
