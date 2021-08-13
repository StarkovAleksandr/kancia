import { validationScheme } from '../../common/validation/validation.js';

export const validationMiddleware = (scheme) => (req, res, next) => {
  const validation = validationScheme(scheme, req.body);
  if (Object.keys(validation).length === 0) {
    next();
  } else {
    console.log('Invalid value');

    return res.status(400).send(validation);
  }
};
