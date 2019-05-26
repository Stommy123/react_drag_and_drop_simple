import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './components/Container';

const App = _ => (
  <div className="App">
    <DragDropContextProvider backend={HTML5Backend}>
      <Container />
    </DragDropContextProvider>
  </div>
);


export default App;
