import Router from 'express';

import photosControllers from './photos.controller.js';

const router = new Router();

router.post(`/photos`, photosControllers.create);

router.get(`/photos`, photosControllers.getAll);

router.get(`/photos/:id`, photosControllers.getOne);

router.put(`/photos/:id`, photosControllers.update);

router.delete(`/photos/:id`, photosControllers.delete);

export default router;
