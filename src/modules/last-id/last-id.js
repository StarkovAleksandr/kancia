import mongoose from 'mongoose';

const lastIds = new mongoose.Schema({
  modelName: { type: String, required: true },
  lastId: { type: Number, required: true },
});

export default mongoose.model('lastIds', lastIds);
