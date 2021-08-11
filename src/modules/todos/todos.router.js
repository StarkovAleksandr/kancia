import Router from 'express';

import todosControllers from './todos.controller.js';
import { validation } from './todos.validation.js';

const router = new Router();

router.post(
  `/todos`,
  (req, res, next) => {
    const result = validation(req.body);
    if (result === true) {
      next();
    } else {
      console.log('Invalid value');

      res.status(400).send(result);
    }
  },
  todosControllers.create
);

router.get(`/todos`, todosControllers.getAll);

router.get(`/todos/:id`, todosControllers.getOne);

router.put(`/todos/:id`, todosControllers.update);

router.delete(`/todos/:id`, todosControllers.delete);

export default router;
