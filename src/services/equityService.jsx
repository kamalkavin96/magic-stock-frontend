import axios from "axios";
import { API_V1_BASSE_URL } from "../config/urlConfig";

const api = axios.create({
  baseURL: API_V1_BASSE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

class EquityService {
  async getGainers(indexSymbol) {
    try {
      const response = await api.get(
        `/api/v1/nse/equity/${indexSymbol}/gainers`,
      );
      return response.data;
    } catch (error) {
      console.error("Error loading gainers:", error);

      throw error;
    }
  }

  async getLosers(indexSymbol) {
    try {
      const response = await api.get(
        `/api/v1/nse/equity/${indexSymbol}/losers`,
      );
      return response.data;
    } catch (error) {
      console.error("Error loading losers:", error);

      throw error;
    }
  }

  async searchSymbols(symbol) {
    try {
      const response = await api.get(`/api/v1/nse/search-symbol/${symbol}`);
      return response.data;
    } catch (error) {
      console.error("Error searching symbols:", error);
      return [];
    }
  }
}

export default new EquityService();
