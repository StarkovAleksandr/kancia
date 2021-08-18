import Photo from './photo.js';

class PhotoService {
  async create(photo) {
    return Photo.create({
      ...photo,
    });
  }

  async getAll() {
    return Photo.find().sort({ _id: 1 }).exec();
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    return Photo.findById(id).populate('album').exec();
  }

  async findOneById(id) {
    return Photo.findOne({ id }).exec();
  }

  async update(photo) {
    if (!photo._id) {
      throw new Error('ID not request');
    }
    return Photo.findByIdAndUpdate(photo._id, photo, {
      new: true,
    });
  }

  async delete(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    await Photo.findByIdAndDelete(id);
  }

  async deleteAllByAlbumId(id) {
    const data = await Photo.find({ album: id }).exec();

    for (const { _id } of data) {
      await this.delete(_id);
    }
  }
}

export default new PhotoService();
