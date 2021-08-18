import Photo from './photo.js';

class PhotoService {
  async create(photo) {
    return Photo.create({
      ...photo,
    });
  }

  async getAll() {
    return Photo.find().exec();
  }

  async getOne(id) {
    return Photo.findById(id).populate('album').exec();
  }

  async update(id, update) {
    return Photo.findByIdAndUpdate(id, update, {
      new: true,
    });
  }

  async delete(filter) {
    await Photo.deleteOne(filter);
  }

  async deleteAllByAlbumId(id) {
    const data = await Photo.find({ album: id }).exec();

    for (const { _id } of data) {
      await this.delete(_id);
    }
  }
}

export default new PhotoService();
