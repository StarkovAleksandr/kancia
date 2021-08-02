import Router from 'express';

import postsControllers from './posts.controller.js';

const router = new Router();

router.post(`/albums`, postsControllers.create);

router.get(`/albums`, postsControllers.getAll);

router.get(`/albums/:id`, postsControllers.getOne);

router.put(`/albums/:id`, postsControllers.update);

router.delete(`/albums/:id`, postsControllers.delete);

export default router;
