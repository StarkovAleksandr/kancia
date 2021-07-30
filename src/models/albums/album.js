import mongoose from "mongoose";

const Album = new mongoose.Schema({
  userId: { type: Number, required: true },
  id: { type: Number, required: true },
  title: { type: String, required: true },
});

export default mongoose.model("Album", Album);
