import { Button } from '@material-ui/core';
import './Card.css';

const Card = ({ title, content, removeCard }) => {
  return (
    <fieldset>
      <legend>{ title.toUpperCase() }</legend>
      <p>{ content }</p>
      <Button 
        onClick={ () => removeCard({title: title, content: content}) }
        children="Delete"
      />
    </fieldset>
  )
}

export default Card;