import axios from 'axios';

import albumService from '../albums/albums.service.js';
import commentsSrvice from '../comments/comments.service.js';
import photosSrvice from '../photos/photos.service.js';
import postsSrvice from '../posts/posts.service.js';
import todosSrvice from '../todos/todos.service.js';
import usersSrvice from '../users/users.service.js';

const getApiUrl = (str) => `https://jsonplaceholder.typicode.com/${str}`;

class InitializerService {
  async initializeAll() {
    await this.#initializeAlbums();
    await this.#initializeComments();
    await this.#initializePhotos();
    await this.#initializePosts();
    await this.#initializeTodos();
    await this.#initializeUsers();
    await this.#initializeUsers();
  }

  async #initializeAlbums() {
    const { data } = await axios.get(getApiUrl('albums'));

    for (let { id, userId, ...album } of data.splice(0, 10)) {
      const exist = await albumService.getOne(id);

      if (!exist)
        await albumService.create({ ...album, _id: id, user: userId });
    }
    console.log('Album init COMPLETE 😨');
  }

  async #initializeComments() {
    const { data } = await axios.get(getApiUrl('comments'));

    for (let { id, postId, ...comment } of data.splice(0, 10)) {
      const exist = await commentsSrvice.getOne(id);

      if (!exist)
        await commentsSrvice.create({ ...comment, _id: id, post: postId });
    }
    console.log('Comments init COMPLETE 😱');
  }

  async #initializePhotos() {
    const { data } = await axios.get(getApiUrl('photos'));

    for (let { id, albumId, ...photo } of data.splice(0, 10)) {
      const exist = await photosSrvice.getOne(id);

      if (!exist)
        await photosSrvice.create({ ...photo, _id: id, album: albumId });
    }
    console.log('Photos init COMPLETE 🤔');
  }

  async #initializePosts() {
    const { data } = await axios.get(getApiUrl('posts'));

    for (let { id, userId, ...post } of data.splice(0, 10)) {
      const exist = await postsSrvice.getOne(id);

      if (!exist) await postsSrvice.create({ ...post, _id: id, user: userId });
    }
    console.log('Posts init COMPLETE 😐');
  }

  async #initializeTodos() {
    const { data } = await axios.get(getApiUrl('todos'));

    for (let { id, userId, ...todo } of data.splice(0, 10)) {
      const exist = await todosSrvice.getOne(id);

      if (!exist) await todosSrvice.create({ ...todo, _id: id, user: userId });
    }
    console.log('Todos init COMPLETE 😒');
  }

  async #initializeUsers() {
    const { data } = await axios.get(getApiUrl('users'));

    for (let { id, ...user } of data.splice(0, 10)) {
      const exist = await usersSrvice.getOne(id);

      if (!exist) await usersSrvice.create({ ...user, _id: id });
    }
    console.log('Users init COMPLETE 😕');
  }
}

export default new InitializerService();
