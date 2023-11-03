import Image from "next/image";
import { IHero } from "../interfaces/HeroInterface";

export default function Hero({
  data,
  onChangeHero,
  selectHeroes,
}: {
  data: IHero;
  onChangeHero: (heroId: number) => void;
  selectHeroes: number[];
}) {
  return (
    <div
      key={data.id}
      className={`max-w-md bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
        selectHeroes.includes(data.id)
          ? "bg-gray-500 "
          : " hover:bg-gray-100 transition duration-700 "
      }`}
      onClick={() => onChangeHero(data.id)}
    >
      <a href="#">
        <Image
          className="rounded-t-lg w-full"
          src={data.images.md}
          alt=""
          width={250}
          height={250}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5
            className={`mb-2 text-2xl font-bold tracking-tight text-gray-90 flex justify-center ${
              selectHeroes.includes(data.id) ? "text-white" : " "
            }`}
          >
            {data.name}
          </h5>
        </a>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex justify-center">
          {data.powerstats.power}
        </p> */}
      </div>
    </div>
  );
}
