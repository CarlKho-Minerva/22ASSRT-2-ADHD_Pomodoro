import React from 'react';
import { Timer } from './Timer';
import { TaskList } from './TaskList';
import { Settings } from './Settings';
import { BreakResources } from './BreakResources';
import { Integration } from './Integration';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Pomodoro App</h1>
      </div>
      <Timer />
      <TaskList />
      <Settings />
      <BreakResources />
      <Integration />
    </div>
  );
}

export default App;
