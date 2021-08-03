import routerAlbums from './albums/albums.router.js';
import routerComments from './comments/comments.router.js';
import routerPhotos from './photos/photos.router.js';
import routerPosts from './posts/posts.router.js';
import routerTodos from './todos/todos.router.js';
import routerUsers from './users/users.router.js';

const routers = [
  routerAlbums,
  routerComments,
  routerPhotos,
  routerPosts,
  routerTodos,
  routerUsers,
];

const routing = (app) => {
  routers.forEach((route) => app.use(route));
};

export default routing;
