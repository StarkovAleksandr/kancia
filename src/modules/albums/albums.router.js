import Router from 'express';

import albumsControllers from './albums.controller.js';
import { validation } from './albums.validation.js';

const router = new Router();

router.post(
  `/albums`,
  (req, res, next) => {
    const result = validation(req.body);
    if (result === true) {
      next();
    }
    res.status(400).send(result);
  },
  albumsControllers.create
);
router.get(`/albums`, albumsControllers.getAll);
router.get(`/albums/:id`, albumsControllers.getOne);
router.put(`/albums/:id`, albumsControllers.update);
router.delete(`/albums/:id`, albumsControllers.delete);

export default router;
