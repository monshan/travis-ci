import { TextField } from '@material-ui/core';
import { useState } from 'react';

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <form>
    <TextField id="title"/>
    <TextField id="content"/>
    </form>
  )
}

export default Form;