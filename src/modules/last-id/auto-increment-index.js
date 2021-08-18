import mongoose from 'mongoose';

import genInfo from './last-id.js';

export const autoIncrementIndex = (modelName, model) => {
  model.pre('save', async function (next) {
    const self = this;

    if (self._id) {
      return next();
    }

    const isMatch = !(await genInfo.findOne({ modelName }));

    if (isMatch) {
      let { _id: lastId } = await mongoose
        .model(modelName, model)
        .findOne({}, {}, { sort: { _id: -1 } });

      lastId += 1;

      await genInfo.create({
        modelName,
        lastId,
      });

      self._id = lastId;

      return next();
    }

    const { lastId: previousId } = await genInfo.findOne({ modelName });

    await genInfo.findOneAndUpdate({ modelName }, { lastId: previousId + 1 });

    self._id = previousId + 1;

    return next();
  });
};
