import { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

const App = () => {

  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3200/events?q=${query}&_page=1`)
      .then(res => {
        console.log(res.data);
      })
  }, [query])

  return (
      <TextField 
      id="outlined-basic" 
      label="Enter Search Term" 
      variant="outlined" 
      onChange={(e) => setQuery(e.target.value)}
      />
  )
}

export default App;
