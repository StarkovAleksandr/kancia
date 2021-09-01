import Router from 'express';

import postsControllers from './posts.controller.js';
import { validationMiddleware } from '../../common/validation/validation.middleware.js';
import { createOrUpdatePostScheme } from './create-or-update-post.scheme.js';

const router = new Router();

router.post(
  `/posts`,
  validationMiddleware(createOrUpdatePostScheme),
  postsControllers.create
);

router.get(`/posts`, postsControllers.getAll);

router.get(`/posts/:id`, postsControllers.getOne);

router.put(
  `/posts/:id`,
  validationMiddleware(createOrUpdatePostScheme),
  postsControllers.update
);

router.delete(`/posts/:id`, postsControllers.delete);

export default router;
