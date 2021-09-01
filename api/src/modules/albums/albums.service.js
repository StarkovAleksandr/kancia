import Album from './album.js';

class AlbumService {
  async create(album) {
    return Album.create({
      ...album,
    });
  }

  async getAll() {
    return Album.find().exec();
  }

  async getOne(id) {
    return Album.findById(id).populate('user').exec();
  }

  async update(id, update) {
    return Album.findByIdAndUpdate(id, update, {
      new: true,
    });
  }

  async delete(filter) {
    await Album.deleteOne(filter);
  }
}

export default new AlbumService();
