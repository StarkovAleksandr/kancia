import Router from 'express';

import postsControllers from './posts.controller.js';
import { validation } from './posts.validation.js';

const router = new Router();

router.post(
  `/posts`,
  (req, res, next) => {
    const result = validation(req.body);
    if (result === true) {
      next();
    } else {
      console.log('Invalid value');

      res.status(400).send(result);
    }
  },
  postsControllers.create
);

router.get(`/posts`, postsControllers.getAll);

router.get(`/posts/:id`, postsControllers.getOne);

router.put(`/posts/:id`, postsControllers.update);

router.delete(`/posts/:id`, postsControllers.delete);

export default router;
