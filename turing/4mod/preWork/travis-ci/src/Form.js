import { FormControl, TextField, Button } from '@material-ui/core';
import { useState } from 'react';

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <FormControl>
    <TextField 
      id="title"
      placeholder="Title"
      onChange={ e => setTitle(e.target.value) }
    />
    <TextField
      id="content"
      placeholder="Content"
      onChange={ e => setContent(e.target.value) }
    />
    <Button
      variant="outlined"
    >
      Submit
    </Button>
    </FormControl>
  )
}

export default Form;