import axios from 'axios';

import AlbumService from '../albums/albums.service.js';
import CommentsSrvice from '../comments/comments.service.js';
import PhotosSrvice from '../photos/photos.service.js';
import PostsSrvice from '../posts/posts.service.js';
import TodosSrvice from '../todos/todos.service.js';
import UsersSrvice from '../users/users.service.js';

const getApiUrl = (str) => `https://jsonplaceholder.typicode.com/${str}`;

class InitializerService {
  async initializeAll() {
    await this.#initializeAlbums();
    await this.#initializeComments();
    await this.#initializePhotos();
    await this.#initializePosts();
    await this.#initializeTodos();
    await this.#initializeUsers();
  }

  async #initializeAlbums() {
    const { data } = await axios.get(getApiUrl('albums'));

    for (let { id, userId, ...album } of [...data.slice(0, 10)]) {
      const exist = await AlbumService.getOne(id);

      if (!exist)
        await AlbumService.create({ ...album, _id: id, user: userId });
    }
    console.log('Album init COMPLETE 😨');
  }

  async #initializeComments() {
    const { data } = await axios.get(getApiUrl('comments'));

    for (let { id, postId, ...comment } of [...data.slice(0, 10)]) {
      const exist = await CommentsSrvice.getOne(id);

      if (!exist)
        await CommentsSrvice.create({ ...comment, _id: id, post: postId });
    }
    console.log('Comments init COMPLETE 😱');
  }

  async #initializePhotos() {
    const { data } = await axios.get(getApiUrl('photos'));

    for (let { id, albumId, ...photo } of [...data.slice(0, 10)]) {
      const exist = await PhotosSrvice.getOne(id);

      if (!exist)
        await PhotosSrvice.create({ ...photo, _id: id, album: albumId });
    }
    console.log('Photos init COMPLETE 🤔');
  }

  async #initializePosts() {
    const { data } = await axios.get(getApiUrl('posts'));

    for (let { id, userId, ...post } of [...data.slice(0, 10)]) {
      const exist = await PostsSrvice.getOne(id);

      if (!exist) await PostsSrvice.create({ ...post, _id: id, user: userId });
    }
    console.log('Posts init COMPLETE 😐');
  }

  async #initializeTodos() {
    const { data } = await axios.get(getApiUrl('todos'));

    for (let { id, userId, ...todo } of [...data.slice(0, 10)]) {
      const exist = await TodosSrvice.getOne(id);

      if (!exist) await TodosSrvice.create({ ...todo, _id: id, user: userId });
    }
    console.log('Todos init COMPLETE 😒');
  }

  async #initializeUsers() {
    const { data } = await axios.get(getApiUrl('users'));

    for (let { id, ...user } of [...data.slice(0, 10)]) {
      const exist = await UsersSrvice.getOne(id);

      if (!exist) await UsersSrvice.create({ ...user, _id: id });
    }
    console.log('Users init COMPLETE 😕');
  }
}

export default new InitializerService();
