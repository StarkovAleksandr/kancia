import photoService from './photos.service.js';
class PhotoController {
  async create(req, res) {
    try {
      const photo = await photoService.create({ ...req.body });

      res.status(200).json(photo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const photos = await photoService.getAll();

      return res.json(photos);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const existPhoto = await photoService.getOne(id);
      if (!existPhoto)
        return res.status(404).send(`Photo by id #${id} is not defined`);

      return res.json(existPhoto);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const existPhoto = await photoService.getOne(id);
      if (!existPhoto)
        return res.status(404).send(`Photo by id #${id} is not defined`);

      const updatedPhoto = await photoService.update(id, req.body);

      return res.json(updatedPhoto);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const existPhoto = await photoService.getOne(id);
      if (!existPhoto)
        return res.status(404).send(`Photo by id #${id} is not defined`);

      await photoService.delete(existPhoto);

      return res.send(true);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PhotoController();
