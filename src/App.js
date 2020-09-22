import React from 'react';
import './App.css';

function App() {

  const listItem = <li>Some Stuff</li>;


  return (
    <div className="App">
      <h3>Quote Generator - React</h3>

      <button type="button">Add Item</button>
      <span>&nbsp;</span>
      <button id="clear" type="button">Clear List</button>

      <ul>
        {listItem}
      </ul>

    </div>
  );
}

export default App;
