import { IHero } from "../interfaces/HeroInterface";

export const calculateHighParam = (
  heroes: IHero[],
  param: keyof IHero["powerstats"]
) => {
  return heroes[0].powerstats[param] > heroes[1].powerstats[param]
    ? heroes[0].id
    : heroes[1].id;
};
