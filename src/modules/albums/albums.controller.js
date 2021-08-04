import AlbumService from './albums.service.js';

class AlbumController {
  async create(req, res) {
    try {
      const album = await AlbumService.create(req.body);

      res.status(200).json(album);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const albums = await AlbumService.getAll();

      return res.json(albums);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const album = await AlbumService.getOne(req.params.id);

      return res.json(album);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedAlbum = await AlbumService.update(req.body);

      return res.json(updatedAlbum);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const album = await AlbumService.delete(req.params.id);

      return res.json(album);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new AlbumController();
