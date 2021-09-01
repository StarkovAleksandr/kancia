import Router from 'express';

import commentsControllers from './comments.controller.js';
import { validationMiddleware } from '../../common/validation/validation.middleware.js';
import { createOrUpdateCommentScheme } from './create-or-update-comment.scheme.js';

const router = new Router();

router.post(
  `/comments`,
  validationMiddleware(createOrUpdateCommentScheme),
  commentsControllers.create
);
router.get(`/comments`, commentsControllers.getAll);
router.get(`/comments/:id`, commentsControllers.getOne);
router.put(
  `/comments/:id`,
  validationMiddleware(createOrUpdateCommentScheme),
  commentsControllers.update
);
router.delete(`/comments/:id`, commentsControllers.delete);

export default router;
