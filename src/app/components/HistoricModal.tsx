/* eslint-disable @next/next/no-img-element */
import { Button, Modal } from "flowbite-react";
import { useContext, useState } from "react";
import { historyContext } from "../contexts/HistoryContext";
import { IHero } from "../interfaces/HeroInterface";

export default function HistoricModal() {
  const [openModal, setOpenModal] = useState(false);

  const { history } = useContext(historyContext);

  console.log(history);

  return (
    <>
      <Button
        className="bg-blue-500 text-black w-40 mb-5  "
        onClick={() => setOpenModal(true)}
      >
        Recents battles
      </Button>
      <Modal
        size="md"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Previous battles</Modal.Header>
        <Modal.Body>
          {history.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 justify-center items-center p-6"
            >
              <div
                className={`flex justify-center items-center w-32 h-36 rounded-md ${
                  item.winner === item.heroes[0].name
                    ? "bg-green-500"
                    : "bg-red-500"
                }   `}
              >
                <img
                  src={item.heroes[0].images.md}
                  alt="Hero1  "
                  width={80}
                  height={80}
                  className="rounded-lg "
                />
              </div>
              <div>
                <p>Versus</p>
              </div>

              <div
                className={`flex justify-center items-center w-32 h-36 rounded-md ${
                  item.winner === item.heroes[1].name
                    ? "bg-green-500"
                    : "bg-red-500"
                }   `}
              >
                <img
                  src={item.heroes[1].images.md}
                  alt="hero2"
                  width={80}
                  height={80}
                  className="rounded-lg "
                />
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
