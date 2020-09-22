import React from 'react';
import './App.css';

function App() {

  const item = <li>Some Stuff</li>;


  return (
    <div className="App">
      <h3>Quote Generator - React</h3>

      <button type="button">Add Item</button>
      <span>&nbsp;</span>
      <button id="clear" type="button">Clear List</button>

      <ul>
        {item}
      </ul>

    </div>
  );
}

export default App;
