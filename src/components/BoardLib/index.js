import React, { useContext } from "react";
import Card from "../Card";
import { BoardContext } from "../../contexts/board";
import { Container } from "./styles";

function BoardLib() {
  const context = useContext(BoardContext);
  const data = context.cards.map(
    (card) =>
      card.state === "lib" && <Card key={card.id} card={card} className="lib" />
  );
  return <Container>{data}</Container>;
}

export default BoardLib;
