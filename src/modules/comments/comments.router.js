import Router from 'express';

import commentsControllers from './comments.controller.js';

const router = new Router();

router.post(`/albums`, commentsControllers.create);

router.get(`/albums`, commentsControllers.getAll);

router.get(`/albums/:id`, commentsControllers.getOne);

router.put(`/albums/:id`, commentsControllers.update);

router.delete(`/albums/:id`, commentsControllers.delete);

export default router;
