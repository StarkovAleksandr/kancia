import Album from "./album.js";

class AlbumService {
  async create(album) {
    const createdAlbum = await Album.create({
      ...album,
    });
    return createdAlbum;
  }

  async getAll() {
    const albums = await Album.find();
    return albums;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID not request");
    }
    const album = await Album.findById(id);
    return album;
  }

  async update(album) {
    if (!album._id) {
      throw new Error("ID not request");
    }
    const updatedAlbum = await Album.findByIdAndUpdate(album._id, album, {
      new: true,
    });
    return updatedAlbum;
  }

  async delete(id) {
    if (!id) {
      throw new Error("ID not request");
    }
    const album = await Album.findByIdAndDelete(id);
    return album;
  }
}

export default new AlbumService();