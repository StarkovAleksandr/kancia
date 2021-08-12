import { schemeValidate } from '../../common/validation/validation.js';

export const validationMiddleware = (validationScheme) => (req, res, next) => {
  const validation = schemeValidate(validationScheme, req.body);
  if (validation) {
    next();
  } else {
    console.log('Invalid value');

    return res.status(400).send(result);
  }
};
