import Router from 'express';

import albumsControllers from './albums.controller.js';
import { validationMiddleware } from '../../common/validation/validation.middleware.js';
import { createOrUpdateAlbumScheme } from './create-or-update-album.scheme.js';

const router = new Router();

router.post(
  `/albums`,
  validationMiddleware(createOrUpdateAlbumScheme),
  albumsControllers.create
);

router.get(`/albums`, albumsControllers.getAll);

router.get(`/albums/:id`, albumsControllers.getOne);

router.put(
  `/albums/:id`,
  validationMiddleware(createOrUpdateAlbumScheme),
  albumsControllers.update
);

router.delete(`/albums/:id`, albumsControllers.delete);

export default router;
