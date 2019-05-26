import React, { useState } from 'react';
import update from 'immutability-helper';
import Card from './Card';
import { CARD_DATA } from '../data';

const style = { width: 400 };

const Container = _ => {
  const [cards, setCards] = useState(CARD_DATA);
  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(update(cards, { $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]] }));
  };
  return (
    <div style={style}>
      {cards.map((card, i) => (
        <Card key={card.id} index={i} id={card.id} text={card.text} moveCard={moveCard} />
      ))}
    </div>
  );
};

export default Container;
