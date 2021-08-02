import axios from 'axios';

import models from '../modules/services.js';

const getUrl = (str) => `https://jsonplaceholder.typicode.com/${str}`;

export default async () => {
  const promise = Object.entries(models).map(async ([path, model]) => {
    const { data } = await axios.get(getUrl(path));

    const promises = data.reduce(
      (acc, currentItem) => [...acc, model.create(currentItem)],
      []
    );

    return Promise.all(promises);
  });

  return Promise.all(promise);
};
