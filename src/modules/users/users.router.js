import Router from 'express';

import usersControllers from './users.controller.js';

const router = new Router();

router.post(`/albums`, usersControllers.create);

router.get(`/albums`, usersControllers.getAll);

router.get(`/albums/:id`, usersControllers.getOne);

router.put(`/albums/:id`, usersControllers.update);

router.delete(`/albums/:id`, usersControllers.delete);

export default router;
