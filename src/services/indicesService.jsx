import axios from "axios";
import { API_V1_BASSE_URL } from "../config/urlConfig";

const api = axios.create({
  baseURL: API_V1_BASSE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

class IndicesService {
  async getIndicesList() {
    try {
      const response = await api.get("/indices/list");
      return response.data;
    } catch (error) {
      console.error("Error fetching indices:", error);
      throw error;
    }
  }
}

export default new IndicesService();
