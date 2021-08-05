import Router from 'express';

import albumControllers from './albums.controller.js';

const router = new Router();

router.post(`/albums`, albumControllers.create);
router.get(`/albums`, albumControllers.getAll);
router.get(`/albums/:id`, albumControllers.getOne);
router.put(`/albums/:id`, albumControllers.update);
router.delete(`/albums/:id`, albumControllers.delete);

export default router;
