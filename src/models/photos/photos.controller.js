import PhotoService from "./photos.service.js";

class PhotoController {
  async create(req, res) {
    try {
      const photo = await PhotoService.create(req.body);
      res.status(200).json(photo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const photos = await PhotoService.getAll();
      return res.json(photos);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const photo = await PhotoService.getOne(req.params.id);
      return res.json(photo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedPhoto = await PhotoService.update(req.body);
      return res.json(updatedPhoto);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const photo = await PhotoService.delete(req.params.id);
      return res.json(photo);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PhotoController();
