import albumService from './albums.service.js';

class AlbumController {
  async create(req, res) {
    try {
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
      const { id } = req.params;
      const existAlbum = await albumService.getOne(id);
      if (!existAlbum)
        return res.status(404).send(`Album by id #${id} is not defined`);

      return res.json(existAlbum);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const existAlbum = await albumService.getOne(id);
      if (!existAlbum)
        return res.status(404).send(`Album by id #${id} is not defined`);

      const updatedAlbum = await albumService.update(id, req.body);

      return res.json(updatedAlbum);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const existAlbum = await albumService.getOne(id);
      if (!existAlbum)
        return res.status(404).send(`Album by id #${id} is not defined`);

      await albumService.delete(existAlbum);

      return res.send(true);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new AlbumController();
