import mongoose from 'mongoose';

import { autoIncrementIndex } from '../last-id/auto-increment-index.js';
import Album from '../albums/album.js';
import Post from '../posts/post.js';
import Todo from '../todos/todo.js';

const user = new mongoose.Schema({
  _id: { type: Number },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true },
    },
  },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true },
  },
});

autoIncrementIndex('User', user);

user.pre('deleteOne', async function (next) {
  const self = this;

  await Album.deleteMany({ user: self._conditions._id });

  await Post.deleteMany({ user: self._conditions._id });

  await Todo.deleteMany({ user: self._conditions._id });

  next();
});

export default mongoose.model('User', user);
