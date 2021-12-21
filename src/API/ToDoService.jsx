import axios from "axios";

export default class PostService {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=30"
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
