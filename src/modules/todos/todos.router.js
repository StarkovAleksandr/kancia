import Router from 'express';

import todosControllers from './todos.controller.js';

const router = new Router();

router.post(`/todos`, todosControllers.create);

router.get(`/todos`, todosControllers.getAll);

router.get(`/todos/:id`, todosControllers.getOne);

router.put(`/todos/:id`, todosControllers.update);

router.delete(`/todos/:id`, todosControllers.delete);

export default router;
