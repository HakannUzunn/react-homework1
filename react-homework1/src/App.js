import React, { useState } from 'react';
import './App.css';

function DynamicComponent({ name }) {
  return <p>This is a dynamic component with name: {name}</p>;
}

function App() {
  const [dynamicComponentName, setDynamicComponentName] = useState('Dynamic Component');

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <DynamicComponent name={dynamicComponentName} />
      <button onClick={() => setDynamicComponentName('Updated Component')}>
        Update Dynamic Component
      </button>
    </div>
  );
}

export default App;