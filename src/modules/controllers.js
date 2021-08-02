import AlbumController from './albums/albums.controller.js';
import CommentsController from './comments/comments.controller.js';
import PhotosController from './photos/photos.controller.js';
import PostsController from './posts/posts.controller.js';
import TodosController from './todos/todos.controller.js';
import UsersController from './users/users.controller.js';

export default {
  albums: AlbumController,
  comments: CommentsController,
  photos: PhotosController,
  posts: PostsController,
  todos: TodosController,
  users: UsersController,
};
