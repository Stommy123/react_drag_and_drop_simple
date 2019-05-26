import React, { useState } from 'react';
import update from 'immutability-helper';
import Card from './Card';
import { CARD_DATA } from '../data';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  height: '500px',
  border: '1px solid black',
  width: '35%',
  textAlign: 'center'
};

const Container = _ => {
  const [cards, setCards] = useState(CARD_DATA);
  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(update(cards, { $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]] }));
  };
  return (
    <div style={styles}>
      <h1>Draggable stuff</h1>
      {cards.map((card, i) => (
        <Card key={card.id} index={i} id={card.id} text={card.text} moveCard={moveCard} />
      ))}
    </div>
  );
};

export default Container;
