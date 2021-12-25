import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';

import List from './List';

const App = () => {

  const [query, setQuery] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3200/events?q=${query}&_page=1`)
      .then(res => {
        setEvents(res.data);
      })
  }, [query])

  return (
    <>
      <TextField 
      id="outlined-basic" 
      label="Enter Search Term" 
      variant="outlined" 
      onChange={(e) => setQuery(e.target.value)}
      />
      <List events={events} />
    </>
  )
}

export default App;
