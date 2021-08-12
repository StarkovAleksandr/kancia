import Router from 'express';

import usersControllers from './users.controller.js';
import { validationMiddleware } from '../../common/validation/validation.middleware.js';
import { createOrUpdateUserScheme } from './create-or-update-user.scheme.js';

const router = new Router();

router.post(
  `/users`,
  validationMiddleware(createOrUpdateUserScheme),
  usersControllers.create
);

router.get(`/users`, usersControllers.getAll);

router.get(`/users/:id`, usersControllers.getOne);

router.put(
  `/users/:id`,
  validationMiddleware(createOrUpdateUserScheme),
  usersControllers.update
);

router.delete(`/users/:id`, usersControllers.delete);

export default router;
