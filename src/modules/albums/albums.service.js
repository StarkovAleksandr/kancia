import Album from './album.js';
import photoService from '../photos/photos.service.js';

class AlbumService {
  async create(album) {
    return Album.create({
      ...album,
    });
  }

  async getAll() {
    return Album.find().sort({ _id: 1 }).exec();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }

    return Album.findById(id).populate('user').exec();
  }

  async findOneById(id) {
    return Album.findOneById(id).exec();
  }

  async update(album) {
    if (!album._id) {
      throw new Error('ID not request');
    }

    return Album.findByIdAndUpdate(album._id, album, {
      new: true,
    });
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    await Album.findByIdAndDelete(id);

    await photoService.deleteAllByAlbumId(id);
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
