import React, { useContext, useState } from "react";
import { BoardContext } from "../../contexts/board";
import {
  Container,
  CardLib,
  CardEdit,
  CardApresentation,
  Button,
} from "./styles";

function Card({ card }) {
  const context = useContext(BoardContext);

  const handleClick = () => {
    console.log(card);
  };
  const handleDelete = () => {
    console.log(card);
  };
  const handleSave = () => {
    console.log(card);
  };
  const handleFila = () => {
    console.log(card);
  };

  const cardType = {
    apresentation: (
      <CardApresentation key={card.id} selected={card.selected}>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <button onClick={handleClick}>
          {card.selected ? "Esconder" : "Apresentar"}
        </button>
      </CardApresentation>
    ),
    edit: (
      <CardEdit key={card.id}>
        <input type="text" value={card.title} />
        <textarea value={card.description} />
        <div>
          <Button onClick={handleSave} cor={"#18bc34"}>
            Salvar
          </Button>
          <Button onClick={handleDelete} cor={"#d11b57"}>
            Excluir
          </Button>
          <Button onClick={handleFila} cor={"#3418bc"}>
            Por na fila
          </Button>
        </div>
      </CardEdit>
    ),
    lib: <CardLib key={card.id}>{card.title}</CardLib>,
  };
  return <Container>{cardType[card.state]}</Container>;
}

export default Card;
