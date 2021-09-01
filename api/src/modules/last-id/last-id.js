import mongoose from 'mongoose';

const genInfo = new mongoose.Schema({
  modelName: { type: String, required: true },
  lastId: { type: Number, required: true },
});

export default mongoose.model('genInfo', genInfo);
