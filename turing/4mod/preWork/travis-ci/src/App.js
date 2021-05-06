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
    const without = cards.filter(card => card !== toRemove)
    setCards([...without]);
  }

  const renderCards = (arr) => {
    return arr.map(card => {
      return (
      <Card
        title={ card.title }
        content={ card.content }
        remove={ removeCard }
      />
      )
    })
  }

  return (
    <div className="App">
      <Form 
        addCard={ addCard }
      />
      <section>
        {!!cards.length && renderCards(cards)}
      </section>
    </div>
  );
}

export default App;
