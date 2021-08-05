import mongoose from 'mongoose';

const Todo = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  user: { type: mongoose.Schema.Types.Number, ref: 'User' },
});

export default mongoose.model('Todo', Todo);
