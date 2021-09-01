import Router from 'express';

import todosControllers from './todos.controller.js';
import { validationMiddleware } from '../../common/validation/validation.middleware.js';
import { createOrUpdateTodoScheme } from './create-or-update-todo.scheme.js';

const router = new Router();

router.post(
  `/todos`,
  validationMiddleware(createOrUpdateTodoScheme),
  todosControllers.create
);

router.get(`/todos`, todosControllers.getAll);

router.get(`/todos/:id`, todosControllers.getOne);

router.put(
  `/todos/:id`,
  validationMiddleware(createOrUpdateTodoScheme),
  todosControllers.update
);

router.delete(`/todos/:id`, todosControllers.delete);

export default router;
