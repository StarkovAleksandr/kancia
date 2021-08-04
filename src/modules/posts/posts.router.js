import Router from 'express';

import postsControllers from './posts.controller.js';

const router = new Router();

router.post(`/posts`, postsControllers.create);

router.get(`/posts`, postsControllers.getAll);

router.get(`/posts/:id`, postsControllers.getOne);

router.put(`/posts/:id`, postsControllers.update);

router.delete(`/posts/:id`, postsControllers.delete);

export default router;
