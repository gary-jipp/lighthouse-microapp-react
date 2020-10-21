import React from 'react';
import './App.css';

  const data = [
    "I change my locks every 16 days.",
    "Creativity is for people with glasses who like to lie.",
    "Cultivating a manly musk puts opponents on notice.",
  ];

function App() {
  console.log("Rendering App Component", new Date().getTime());

  //  We can always use the array index as the "key". That's built into map()
  const listArray = data.map((item, i) => {
    return (<li key={i}>{item}</li>);
  });

  const clear = function () {
    console.log("clearing list");
    data.length = 0;
    // We cleared the list but nothing happened!  Why?
  };

  return (
    <div className="App">
      <h3>Quote Generator - React</h3>

      <button type="button">Add Item</button>
      <span>&nbsp;</span>
      <button id="clear" type="button" onClick={clear}>Clear List</button>

      <ul>
        {listArray}
      </ul>

    </div>
  );
}

export default App;
