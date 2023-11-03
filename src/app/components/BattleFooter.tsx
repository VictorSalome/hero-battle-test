import Image from "next/image";
import { IHero } from "../interfaces/HeroInterface";
import { useContext, useState } from "react";
import BattleModal from "./BattleModal";
import { Button } from "flowbite-react";
import { GiBattleGear } from "react-icons/gi";
import { IBattle } from "../interfaces/BattleInterface";
import { calculateHighParam } from "../utils/calculateHighParam";
import { calculateWinner } from "../utils/calculateWinner";
import { IWins } from "../interfaces/WinsInterface";
import { historyContext } from "../contexts/HistoryContext";

export default function BattleFooter({
  selectHeroesIds,
  heroes,
}: {
  selectHeroesIds: number[];
  heroes: IHero[];
}) {
  const [battle, setBattle] = useState<IBattle | null>(null);
  const firstHero = heroes.find((hero) => hero.id === selectHeroesIds[0]);
  const secondHero = heroes.find((hero) => hero.id === selectHeroesIds[1]);
  const { setHistory, history } = useContext(historyContext);
  if (!firstHero || !secondHero) return;

  const makeBattle = () => {
    const tempHeroes = [firstHero, secondHero];
    const wins: IWins = {
      intelligence: calculateHighParam(tempHeroes, "intelligence"),
      strength: calculateHighParam(tempHeroes, "strength"),
      speed: calculateHighParam(tempHeroes, "speed"),
      durability: calculateHighParam(tempHeroes, "durability"),
      power: calculateHighParam(tempHeroes, "power"),
      combat: calculateHighParam(tempHeroes, "combat"),
    };

    const tempBattle: IBattle = {
      heroes: tempHeroes,
      wins,
      winner: calculateWinner(tempHeroes, wins),
    };

    setHistory([...history, tempBattle]);
    setBattle(tempBattle);
  };

  const closeModal = () => {
    setBattle(null);
  };

  return (
    <div className="fixed bottom-0 bg-gray-200  w-full flex justify-between p-7 text-3xl items-center">
      <div className="flex flex-row items-center  ">
        <Image
          src={firstHero.images.md}
          alt=""
          width={180}
          height={180}
          className="rounded-lg mr-3"
        />
        <p className="text-black  text-2xl ">{firstHero.name} </p>
      </div>

      <Button
        className="bg-gray-600 hover:bg-gray-500 text-white w-80 text-2xl h-[70px] flex justify-center "
        onClick={() => makeBattle()}
      >
        <GiBattleGear className="text-white text-3xl " />
        TO BATTLE
        <GiBattleGear className="text-white text-3xl " />
      </Button>
      <div className=" flex flex-row-reverse items-center ">
        <Image
          src={secondHero.images.md}
          alt=""
          width={180}
          height={180}
          className=" rounded-lg ml-3"
        />
        <p className="text-black flex justify-center text-2xl">
          {secondHero.name}
        </p>
      </div>

      {!!battle && (
        <BattleModal
          openModal={!!battle}
          closeModal={closeModal}
          battle={battle}
        />
      )}
    </div>  
  );
}
