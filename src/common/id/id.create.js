import moduleAlbum from '../../modules/albums/albums.service.js';
import moduleComment from '../../modules/comments/comments.service.js';
import modulePhoto from '../../modules/photos/photos.service.js';
import modulePost from '../../modules/posts/posts.service.js';
import moduleTodo from '../../modules/todos/todos.service.js';
import moduleUser from '../../modules/users/users.service.js';

export const createAlbumId = async () => {
  let newId = 1;
  const albums = await moduleAlbum.getAll();

  for (let currentElem of [...albums]) {
    if (currentElem['_id'] !== newId) {
      return newId;
    }

    newId++;
  }

  return newId;
};

export const createCommentId = async () => {
  let newId = 1;
  const comments = await moduleComment.getAll();

  for (let currentElem of [...comments]) {
    if (currentElem['_id'] !== newId) {
      return newId;
    }

    newId++;
  }

  return newId;
};

export const createPhotoId = async () => {
  let newId = 1;
  const photos = await modulePhoto.getAll();

  for (let currentElem of [...photos]) {
    if (currentElem['_id'] !== newId) {
      return newId;
    }

    newId++;
  }

  return newId;
};

export const createPostId = async () => {
  let newId = 1;
  const posts = await modulePost.getAll();

  for (let currentElem of [...posts]) {
    if (currentElem['_id'] !== newId) {
      return newId;
    }

    newId++;
  }

  return newId;
};

export const createTodoId = async () => {
  let newId = 1;
  const todos = await moduleTodo.getAll();

  for (let currentElem of [...todos]) {
    if (currentElem['_id'] !== newId) {
      return newId;
    }

    newId++;
  }

  return newId;
};

export const createUserId = async () => {
  let newId = 1;
  const users = await moduleUser.getAll();

  for (let currentElem of [...users]) {
    if (currentElem['_id'] !== newId) {
      return newId;
    }

    newId++;
  }

  return newId;
};
