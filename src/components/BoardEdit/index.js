import React, { useContext } from "react";
import Card from "../Card";
import { BoardContext } from "../../contexts/board";
import { Container } from "./styles";

function BoardEdit() {
  const context = useContext(BoardContext);
  const data = context.cards.map(
    (card) => card.state === "edit" && <Card key={card.id} card={card} />
  );
  return <Container>{data}</Container>;
}

export default BoardEdit;
