import axios, { AxiosResponse } from "axios";
import { IHero } from "../interfaces/HeroInterface";

class HeroesAPI {
  async getHeroes() {
    const response: AxiosResponse<IHero[]> = await axios.get(
      "http://homologacao3.azapfy.com.br/api/ps/metahumans"
    );
    return response.data;
  }
}

export default HeroesAPI;
