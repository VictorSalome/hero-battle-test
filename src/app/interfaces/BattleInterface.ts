import { IHero } from "./HeroInterface";
import { IWins } from "./WinsInterface";

export interface IBattle {
  heroes: any[];
  wins: IWins;
  winner: string;
}
