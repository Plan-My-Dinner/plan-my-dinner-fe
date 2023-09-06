import React from 'react';
import { DndContext } from '@dnd-kit/core';
import Homepage from './Components/Homepage/Homepage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <DndContext>
        <Homepage />
      </DndContext>
    </div>
  );
}

export default App;
