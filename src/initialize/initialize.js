import axios from "axios";

import { ALBUMS, COMMENTS, PHOTOS, POSTS, TODOS, USERS } from "../constants.js";
import albumsService from "../models/albums/albums.service.js";
import commentsService from "../models/comments/comments.service.js";
import photosService from "../models/photos/photos.service.js";
import postsService from "../models/posts/posts.service.js";
import todosService from "../models/todos/todos.service.js";
import usersService from "../models/users/users.service.js";

export default async () => {
  await axios.get(`${ALBUMS}`).then(({ data }) => {
    data.forEach(async (currentElement) => {
      await albumsService.create(currentElement);
    });
  });
  await axios.get(`${COMMENTS}`).then(({ data }) => {
    data.forEach(async (currentElement) => {
      commentsService.create(currentElement);
    });
  });
  await axios.get(`${PHOTOS}`).then(({ data }) => {
    data.forEach(async (currentElement) => {
      photosService.create(currentElement);
    });
  });
  await axios.get(`${POSTS}`).then(({ data }) => {
    data.forEach(async (currentElement) => {
      postsService.create(currentElement);
    });
  });
  await axios.get(`${TODOS}`).then(({ data }) => {
    data.forEach(async (currentElement) => {
      await todosService.create(currentElement);
    });
  });
  await axios.get(`${USERS}`).then(({ data }) => {
    data.forEach(async (currentElement) => {
      await usersService.create(currentElement);
    });
  });
};
