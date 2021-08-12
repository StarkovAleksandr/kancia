import Photo from './photo.js';

class PhotoService {
  async create(photo) {
    const createdPhoto = await Photo.create({
      ...photo,
    });

    return createdPhoto;
  }

  async getAll() {
    const photos = await Photo.find().sort({ _id: 1 }).exec();

    return photos;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('ID not request');
    }
    const photo = await Photo.findById(id).populate('album').exec();

    return photo;
  }

  async findOneById(id) {
    return Photo.findOne({ id }).exec();
  }

  async update(photo) {
    if (!photo._id) {
      throw new Error('ID not request');
    }
    const updatedPhoto = await Photo.findByIdAndUpdate(photo._id, photo, {
      new: true,
    });

    return updatedPhoto;
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

  async createPhotoId() {
    return (await Photo.find().sort({ _id: -1 }).limit(1))[0]._id + 1;
  }
}

export default new PhotoService();
