import Photo from './photo.js';

class PhotoService {
  async create(photo) {
    const createdPhoto = await Photo.create({
      ...photo,
    });

    return createdPhoto;
  }

  async getAll() {
    const photos = await Photo.find().exec();

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
    const photo = await Photo.findByIdAndDelete(id);

    return photo;
  }
}

export default new PhotoService();
