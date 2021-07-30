import Router from "express";

import controllers from "./controllers.js";

const router = new Router();

router.post(`/:model`, (req, res) => {
  const { model } = req.params;
  controllers[model].create(req, res);
});
router.get(`/:model`, (req, res) => {
  const { model } = req.params;
  controllers[model].getAll(req, res);
});
router.get(`/:model/:id`, (req, res) => {
  const { model } = req.params;
  controllers[model].getOne(req, res);
});
router.put(`/:model/:id`, (req, res) => {
  const { model } = req.params;
  controllers[model].update(req, res);
});
router.delete(`/:model/:id`, (req, res) => {
  const { model } = req.params;
  controllers[model].delete(req, res);
});

export default router;
