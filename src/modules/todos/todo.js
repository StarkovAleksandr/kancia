import mongoose from 'mongoose';

const Todo = new mongoose.Schema({
  userId: { type: Number, required: true },
  id: { type: Number, required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export default mongoose.model('Todo', Todo);
