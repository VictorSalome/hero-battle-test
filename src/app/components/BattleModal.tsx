"use client";

import Image from "next/image";
import StatsBar from "./StatsBar";
import { Button, Modal, Select } from "flowbite-react";
import { IBattle } from "../interfaces/BattleInterface";

export default function BattleModal({
  battle,
  openModal,
  closeModal,
}: {
  battle: IBattle;
  openModal: boolean;
  closeModal: () => void;
}) {
  const wins = battle.wins;

  const heroes = battle.heroes;

  return (
    <>
      <Modal
        size="2,5xl"
        dismissible
        show={openModal}
        onClose={() => closeModal()}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="bg-white p-4 rounded-lg flex items-center flex-col gap-4">
            <div>
              <h3 className="text-3xl text-green-500 font-bold">
                {" "}
                Winner: {battle.winner}
              </h3>
            </div>

            <div className="flex flex-warp">
              <div>
                <Image
                  src={heroes[0].images.md}
                  alt=""
                  width={350}
                  height={350}
                  className="rounded-lg flex"
                />
                <p className="flex justify-center text-3xl">{heroes[0].name}</p>
              </div>

              <div className="flex px-56 content-center gap-6 text-2xl ">
                <StatsBar hero={heroes[0]} wins={wins} />

                <div className="flex gap-10 flex-col justify-center ">
                  <p>Intelligence</p>
                  <p>Strength</p>
                  <p>Speed</p>
                  <p>Durability</p>
                  <p>Power</p>
                  <p>Combat</p>
                </div>

                <StatsBar hero={heroes[1]} wins={wins} />
              </div>

              <div>
                <Image
                  src={heroes[1].images.md}
                  alt=""
                  width={350}
                  height={350}
                  className="rounded-lg"
                />
                <p className="flex justify-center text-3xl gap-2">
                  {heroes[1].name}
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className=" text-black text-sm bg-gray-300 font-bold hover:bg-gray-500  ml-2 mb-2"
            color="gray"
            onClick={() => closeModal()}
          >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
