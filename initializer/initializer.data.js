import axios from "axios";

import * as allRouter from "./allRourers.js";

const module = allRouter;

axios.get(`https://jsonplaceholder.typicode.com/${module}`).then((res) => {
  const data = res.data;
});

class InitializerService {
  initializeAll() {
    this.#initializeUsers();
  }

  #initializeUsers() {
    DATA_USERS.forEach((user) => {
      usersService.create(user);
    });
  }
}

export default new InitializerService();
