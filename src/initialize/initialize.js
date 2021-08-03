import axios from 'axios';

import services from '../modules/services.js';

const getUrl = (str) => `https://jsonplaceholder.typicode.com/${str}`;

export default async () => {
  const promise = Object.entries(services).map(async ([path, service]) => {
    const { data } = await axios.get(getUrl(path));

    for (let { id, ...item } of [...data.slice(0, 10)]) {
      const exist = await service.getOne(id);

      if (!exist) await service.create({ ...item, _id: id });
    }
  });

  return Promise.all(promise);
};
