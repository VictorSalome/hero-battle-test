import { IHero } from "../interfaces/HeroInterface";
import { IWins } from "../interfaces/WinsInterface";

interface Props {
  hero: IHero;
  wins: IWins;
}

export default function StatsBar({ hero, wins }: Props) {
  return (
    <div className="flex gap-10 flex-col justify-center">
      <p style={{ color: wins.intelligence === hero.id ? "green" : "red" }}>
        {hero.powerstats.intelligence}
      </p>
      <p style={{ color: wins.strength === hero.id ? "green" : "red" }}>
        {hero.powerstats.strength}
      </p>

      <p style={{ color: wins.speed === hero.id ? "green" : "red" }}>
        {hero.powerstats.speed}
      </p>

      <p style={{ color: wins.durability === hero.id ? "green" : "red" }}>
        {hero.powerstats.durability}
      </p>

      <p style={{ color: wins.power === hero.id ? "green" : "red" }}>
        {hero.powerstats.power}
      </p>

      <p style={{ color: wins.combat === hero.id ? "green" : "red" }}>
        {hero.powerstats.combat}
      </p>
    </div>
  );
}
