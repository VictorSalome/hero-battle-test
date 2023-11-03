"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroesAPI from "./endpoints";
import { IHero } from "./interfaces/HeroInterface";
import Search from "./components/Search";
import Hero from "./components/Hero";
import BattleFooter from "./components/BattleFooter";
import HistoricModal from "./components/HistoricModal";

export default function Home() {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectHeroes, setSelectHeroes] = useState<number[]>([]);
  const filteredHeroes = heroes.filter((hero) => {
    return hero.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const onChangeHero = (id: number) => {
    if (selectHeroes.includes(id)) {
      setSelectHeroes(selectHeroes.filter((hero) => hero !== id));
      return;
    }
    if (selectHeroes.length >= 2) {
      selectHeroes.shift();
    }
    setSelectHeroes([...selectHeroes, id]);
  };

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const data = await new HeroesAPI().getHeroes();
        setHeroes(data);
      } catch (error) {
        console.error(error);
      }
    };

    getHeroes();
  }, []);

  return (
    <>
      <div className="bg-gray-200">
        <div>
          <Search searchHeroes={setSearchText} />
        </div>

        <h1 className="text-3xl font-bol mb-10  flex justify-center ">
          The Best Heroes on the Planet
        </h1>
        <HistoricModal />
        <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
          {filteredHeroes.map((hero) => {
            return (
              <Hero
                selectHeroes={selectHeroes}
                onChangeHero={onChangeHero}
                key={hero.id}
                data={hero}
              />
            );
          })}
        </div>

        {selectHeroes.length === 2 && (
          <BattleFooter selectHeroesIds={selectHeroes} heroes={heroes} />
        )}
      </div>
    </>
  );
}
