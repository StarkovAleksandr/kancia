import Album from './album.js';
import photoService from '../photos/photos.service.js';

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

  async deleteAllByUserId(id) {
    const data = await Album.find({ user: id }).exec();

    for (const { _id } of data) {
      await this.delete(_id);

      await photoService.deleteAllByAlbumId(_id);
    }
  }
}

export default new AlbumService();
