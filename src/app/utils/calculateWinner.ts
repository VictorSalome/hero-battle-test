import { IHero } from "../interfaces/HeroInterface";
import { IWins } from "../interfaces/WinsInterface";

export const calculateWinner = (heroes: IHero[], wins: IWins): string => {
  const values = Object.values(wins);
  const count: { [key: string]: number } = {};
  values.forEach((value) => {
    count[value] = (count[value] || 0) + 1;
  });
  const points = Object.entries(count);
  if (points[0][1] > points[1][1]) {
    return heroes.find((hero) => hero.id === Number(points[0][0]))?.name || "";
  } else if (points[0][1] < points[1][1]) {
    return heroes.find((hero) => hero.id === Number(points[1][0]))?.name || "";
  } else {
    return "Empate";
  }
};
