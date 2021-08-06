import Router from 'express';

import todosControllers from './todos.controller.js';
import { validation } from './todos.validation.js';

const router = new Router();

router.post(`/todos`, (req) => validation(req.body), todosControllers.create);

router.get(`/todos`, todosControllers.getAll);

router.get(`/todos/:id`, todosControllers.getOne);

router.put(`/todos/:id`, todosControllers.update);

router.delete(`/todos/:id`, todosControllers.delete);

export default router;
