import mongoose from 'mongoose';

const Todo = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export default mongoose.model('Todo', Todo);
