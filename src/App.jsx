import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './components/Container';
import OutsideContent from './components/OutsideContent';

const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: 25
};

const App = _ => (
  <div className="App" style={style}>
    <DragDropContextProvider backend={HTML5Backend}>
      <Container />
    </DragDropContextProvider>
    <OutsideContent />
  </div>
);

export default App;
