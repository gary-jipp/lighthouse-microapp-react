import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const initialData = [
  "I change my locks every 16 days.",
  "Creativity is for people with glasses who like to lie.",
  "Cultivating a manly musk puts opponent on notice.",
];

function App() {
  console.log("Rendering App Component", new Date().getTime());
  const [data, setData] = useState(initialData);

  const addItem = function (event) {
    const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
    axios(url).then(res => {
      data.push(res.data);
      setData([...data]);
      // setData(prev => [...prev, ...res.data]);
    });
  };

  const clear = function () {
    setData([]);
  };

  const listArray = data.map(item => {
    return (<li>{item}</li>);
  });

  return (
    <div className="App">
      <h3>Quote Generator - React</h3>

      <button type="button" onClick={addItem}>Add Item</button>
      <span>&nbsp;</span>
      <button id="clear" type="button" onClick={clear}>Clear List</button>

      <ul>
        {listArray}
      </ul>

    </div>
  );
}

export default App;
