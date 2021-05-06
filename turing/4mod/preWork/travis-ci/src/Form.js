import { TextField } from '@material-ui/core';
import { useState } from 'react';

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <form>
    <TextField 
      id="title"
      onChange={ e => setTitle(e.target.value) }
    />
    <TextField
      id="content"
      onChange={ e => setContent(e.target.value) }
    />
    <button>
      Submit
    </button>
    </form>
  )
}

export default Form;