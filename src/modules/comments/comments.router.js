import Router from 'express';

import commentsControllers from './comments.controller.js';
import { validation } from './comments.validation.js';

const router = new Router();

router.post(
  `/comments`,
  (req) => validation(req.body),
  commentsControllers.create
);

router.get(`/comments`, commentsControllers.getAll);

router.get(`/comments/:id`, commentsControllers.getOne);

router.put(`/comments/:id`, commentsControllers.update);

router.delete(`/comments/:id`, commentsControllers.delete);

export default router;
