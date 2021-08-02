import Router from 'express';

import todosControllers from './todos.controller.js';

const router = new Router();

router.post(`/albums`, todosControllers.create);

router.get(`/albums`, todosControllers.getAll);

router.get(`/albums/:id`, todosControllers.getOne);

router.put(`/albums/:id`, todosControllers.update);

router.delete(`/albums/:id`, todosControllers.delete);

export default router;
