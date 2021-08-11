import Router from 'express';

import photosControllers from './photos.controller.js';
import { validation } from './photos.validation.js';

const router = new Router();

router.post(
  `/photos`,
  (req, res, next) => {
    const result = validation(req.body);
    if (result === true) {
      next();
    } else {
      console.log('Invalid value');

      res.status(400).send(result);
    }
  },
  photosControllers.create
);

router.get(`/photos`, photosControllers.getAll);

router.get(`/photos/:id`, photosControllers.getOne);

router.put(`/photos/:id`, photosControllers.update);

router.delete(`/photos/:id`, photosControllers.delete);

export default router;
