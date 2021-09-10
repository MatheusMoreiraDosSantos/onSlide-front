export const constCard = () => {
  let cards = [];
  for (let index = 0; index < 30; index++) {
    cards.push({
      id: index,
      title: `${index} Tessalonicenses 2:2 teste teste`,
      description:
        "Que não vos movais facilmente do vosso entendimento, nem vos perturbeis, quer por espírito, quer por palavra, quer por epístola, como de nós, como se o dia de Cristo estivesse já perto.",
      state: "apresentation",
      selected: false,
    });
  }
  for (let index = 0; index < 20; index++) {
    cards.push({
      id: index,
      title: `${index} Tessalonicenses 2:2 teste teste`,
      description:
        "Ninguém de maneira alguma vos engane; porque não será assim sem que antes venha a apostasia, e se manifeste o homem do pecado, o filho da perdição",
      state: "edit",
    });
  }
  for (let index = 0; index < 50; index++) {
    cards.push({
      id: index,
      title: `${index} Tessalonicenses 2:2 teste teste`,
      description:
        "Que não vos movais facilmente do vosso entendimento, nem vos perturbeis, quer por espírito, quer por palavra, quer por epístola, como de nós, como se o dia de Cristo estivesse já perto.",
      state: "lib",
    });
  }
  return cards;
};
