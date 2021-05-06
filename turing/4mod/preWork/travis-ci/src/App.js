import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { useState } from 'react';

const App = () => {
  const [cards, setCards] = useState([]);

  const renderCards = (arr) => {
    return arr.map(({ title, content }) => {
      return (
        <fieldset>
          <legend>{ title }</legend>
          <p>{ content }</p>
        </fieldset>
      )
    })
  }

  return (
    <div className="App">
      <Form />
      {cards.length && renderCards()}
    </div>
  );
}

export default App;
