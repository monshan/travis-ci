const Card = ({ title, content, remove }) => {
  return (
    <fieldset>
      <legend>{ title }</legend>
      <p>{ content }</p>
      <button>💩</button>
    </fieldset>
  )
}

export default Card;