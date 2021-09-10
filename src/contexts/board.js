import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { constCard } from "./cards";
export const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [cards, setCards] = useState(constCard);

  const createCard = (card) => {
    const newCard = {
      id: uuidv4(),
      title: card.title,
      description: card.description,
      state: false,
      selected: false,
    };
    setCards([...cards, newCard]);
  };

  const updateCard = (card) => {
    const newCard = {
      id: card.id,
      title: card.title,
      description: card.description,
      state: card.state,
      selected: card.selected,
    };
    setCards([...cards, newCard]);
  };
  return (
    <BoardContext.Provider value={{ cards, createCard, updateCard }}>
      {children}
    </BoardContext.Provider>
  );
};
export default BoardProvider;
