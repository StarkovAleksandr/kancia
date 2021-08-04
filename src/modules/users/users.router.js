import Router from 'express';

import usersControllers from './users.controller.js';

const router = new Router();

router.post(`/users`, usersControllers.create);

router.get(`/users`, usersControllers.getAll);

router.get(`/users/:id`, usersControllers.getOne);

router.put(`/users/:id`, usersControllers.update);

router.delete(`/users/:id`, usersControllers.delete);

export default router;
