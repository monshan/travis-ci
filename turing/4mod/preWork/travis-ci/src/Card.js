import { Button } from '@material-ui/core';

const Card = ({ title, content, removeCard }) => {
  return (
    <fieldset>
      <legend>{ title }</legend>
      <p>{ content }</p>
      <Button 
        onClick={ () => removeCard({title: title, content: content}) }
        children="Delete"
      />
    </fieldset>
  )
}

export default Card;