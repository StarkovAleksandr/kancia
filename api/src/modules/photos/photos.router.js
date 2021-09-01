import Router from 'express';

import photosControllers from './photos.controller.js';
import { validationMiddleware } from '../../common/validation/validation.middleware.js';
import { createOrUpdatePhotoScheme } from './create-or-update-photo.scheme.js';

const router = new Router();

router.post(
  `/photos`,
  validationMiddleware(createOrUpdatePhotoScheme),
  photosControllers.create
);

router.get(`/photos`, photosControllers.getAll);

router.get(`/photos/:id`, photosControllers.getOne);

router.put(
  `/photos/:id`,
  validationMiddleware(createOrUpdatePhotoScheme),
  photosControllers.update
);

router.delete(`/photos/:id`, photosControllers.delete);

export default router;
