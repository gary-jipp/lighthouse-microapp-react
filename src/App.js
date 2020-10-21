import React from 'react';
import './App.css';

function App() {
  console.log("Rendering App Component", new Date().getTime());

  const data = [
    "I change my locks every 16 days.",
    "Creativity is for people with glasses who like to lie.",
    "Cultivating a manly musk puts opponent on notice.",
  ];

  const listArray = [];
  let i = 1;
  for (const item of data) {
    listArray.push(<li key={++i}>{item}</li>);
  }


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
