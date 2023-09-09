import React from 'react';
// import { DndContext } from '@dnd-kit/core';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Homepage from './Components/Homepage/Homepage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <DndContext> */}
      <DndProvider backend={HTML5Backend}>
        <Homepage />
      </DndProvider>
      {/* </DndContext> */}
    </div>
  );
}

export default App;
