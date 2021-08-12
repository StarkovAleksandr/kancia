import photoService from './photos.service.js';
class PhotoController {
  async create(req, res) {
    try {
      req.body['_id'] = await photoService.createPhotoId();

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
      const photo = await photoService.getOne(req.params.id);

      return res.json(photo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedPhoto = await photoService.update(req.body);

      return res.json(updatedPhoto);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const photo = await photoService.delete(req.params.id);

      return res.send(true);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PhotoController();
