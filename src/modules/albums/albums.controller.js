import albumService from './albums.service.js';
import { createAlbumId } from '../../common/id/id.create.js';

class AlbumController {
  async create(req, res) {
    try {
      req.body['_id'] = await createAlbumId();

      const album = await albumService.create({ ...req.body });

      res.status(200).json(album);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const albums = await albumService.getAll();

      return res.json(albums);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const album = await albumService.getOne(req.params.id);

      return res.json(album);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedAlbum = await albumService.update(req.body);

      return res.json(updatedAlbum);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const album = await albumService.delete(req.params.id);

      return res.send(true);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default new AlbumController();
