import Album from './album.js';
import photoService from '../photos/photos.service.js';

class AlbumService {
  async create(album) {
    const createdAlbum = await Album.create({
      ...album,
    });

    return createdAlbum;
  }

  async getAll() {
    const albums = await Album.find().exec();

    return albums;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }

    return Album.findById(id).populate('user').exec();
  }

  async findOneById(id) {
    return Album.findOne({ id }).exec();
  }

  async update(album) {
    if (!album._id) {
      throw new Error('ID not request');
    }
    const updatedAlbum = await Album.findByIdAndUpdate(album._id, album, {
      new: true,
    });

    return updatedAlbum;
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
