import Router from 'express';

import photosControllers from './photos.controller.js';

const router = new Router();

router.post(`/albums`, photosControllers.create);

router.get(`/albums`, photosControllers.getAll);

router.get(`/albums/:id`, photosControllers.getOne);

router.put(`/albums/:id`, photosControllers.update);

router.delete(`/albums/:id`, photosControllers.delete);

export default router;
