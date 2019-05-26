import React from 'react';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  height: '500px',
  border: '1px solid black',
  width: '35%',
  textAlign: 'center'
};

const cardStyles = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

const OutsideContent = _ => (
  <div style={styles}>
    <h1>Cannot drag in here</h1>
    <div style={cardStyles}>hello world</div>
    <div style={cardStyles}>goodbye world</div>
    <div style={cardStyles}>foo</div>
    <div style={cardStyles}>bar</div>
  </div>
);

export default OutsideContent;
