"use client";
import { createContext, useState } from "react";
import { IBattle } from "../interfaces/BattleInterface";

interface IHistoryContext {
  history: IBattle[];
  setHistory: React.Dispatch<React.SetStateAction<IBattle[]>>;
}

export const historyContext = createContext<IHistoryContext>(
  {} as IHistoryContext
);

export const HistoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [history, setHistory] = useState<IBattle[]>([]);

  return (
    <historyContext.Provider value={{ history, setHistory }}>
      {children}
    </historyContext.Provider>
  );
};
