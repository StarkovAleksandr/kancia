import lastIds from '../../modules/last-id/last-id.js';

function autoIncrementId(modelName, model) {
  model.pre('save', async function (next) {
    const self = this;

    console.log('Ready to create id');

    if (!self._id) {
      if (!lastIds[modelName]) {
        const { _id: lastId } = await model.findOne(
          {},
          {},
          { sort: { _id: -1 } }
        );

        lastIds.create({ modelName: self, lastId });
      }
      const previousId = await lastIds.findOne({ modelName }).lastId;

      console.log(`Create id: ${previousId}`);

      model._id = previousId + 1;
      lastIds.findOneAndUpdate({ modelName }, { lastId: previousId + 1 });
    }

    next();
  });
}

export default autoIncrementId;
