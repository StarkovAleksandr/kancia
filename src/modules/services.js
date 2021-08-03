import AlbumService from './albums/albums.service.js';
import CommentsSrvice from './comments/comments.service.js';
import PhotosSrvice from './photos/photos.service.js';
import PostsSrvice from './posts/posts.service.js';
import TodosSrvice from './todos/todos.service.js';
import UsersSrvice from './users/users.service.js';

export default {
  albums: AlbumService,
  comments: CommentsSrvice,
  photos: PhotosSrvice,
  posts: PostsSrvice,
  todos: TodosSrvice,
  users: UsersSrvice,
};
