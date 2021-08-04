import Router from 'express';

import commentsControllers from './comments.controller.js';

const router = new Router();

router.post(`/comments`, commentsControllers.create);

router.get(`/comments`, commentsControllers.getAll);

router.get(`/comments/:id`, commentsControllers.getOne);

router.put(`/comments/:id`, commentsControllers.update);

router.delete(`/comments/:id`, commentsControllers.delete);

export default router;
