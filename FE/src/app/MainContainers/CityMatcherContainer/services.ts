import { apiUrl } from "../../Config/api.config";
import { City } from "./reducer";

export class CityMatcherService {
  static async getCities(): Promise<City[]> {
    try {
      const response = await fetch(`${apiUrl}/v1/cities`);
      const result = await response.json();
      return result;
    } catch (e) {
      // Handle Error Here
    }
  }

  static async getOldCities(query): Promise<City[]> {
    try {
      const response = await fetch(`${apiUrl}/v1/autocomplete?q=${query}`);
      const result = await response.json();
      return result;
    } catch (e) {
      // Handle Error Here
    }
  }
}
