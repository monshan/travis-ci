import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Card from './Card';
import { useState } from 'react';

const App = () => {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  }

  const removeCard = (toRemove) => {
    const withRemoval = cards.filter(card => card.title !== toRemove.title);
    setCards([...withRemoval]);
  }

  const renderCards = (arr) => {
    return arr.map(card => {
      return (
      <Card
        title={ card.title }
        content={ card.content }
        removeCard={ removeCard }
      />
      )
    })
  }

  return (
    <div className="App">
      <div className="form">
        <Form 
          addCard={ addCard }
        />
      </div>
      <section id="cardContainer">
        {renderCards(cards)}
      </section>
    </div>
  );
}

export default App;
