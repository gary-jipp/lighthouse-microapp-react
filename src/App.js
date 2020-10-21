import React from 'react';
import './App.css';

function App() {
  console.log("Rendering App Component", new Date().getTime());

  const listArray = [
    <li key="1">This is a list item</li>,
    <li key="2">This is another list item</li>,
    <li key="3">This is yet another list item</li>,
  ];
  // Note: React wants a "key" attribte for lists, or it gets cranky

  return (
    <div className="App">
      <h3>Quote Generator - React</h3>

      <button type="button">Add Item</button>
      <span>&nbsp;</span>
      <button id="clear" type="button">Clear List</button>

      <ul>
        {listArray}
      </ul>

    </div>
  );
}

export default App;
