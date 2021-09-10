import React, { useContext } from "react";
import { Container } from "./styles.js";
import Card from "../Card";
import { BoardContext } from "../../contexts/board";

function BoardView() {
  const context = useContext(BoardContext);
  const data = context.cards.map(
    (card) =>
      card.state === "apresentation" && (
        <Card key={card.id} card={card} className="view" />
      )
  );

  return <Container>{data}</Container>;
}

export default BoardView;
