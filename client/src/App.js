import { useEffect, useState } from 'react';
import { TextField, Pagination } from '@mui/material';
import axios from 'axios';

import List from './List';

const App = () => {

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3200/events?q=${query}&_page=${page}`)
      .then(res => {
        setEvents(res.data);
      })
  }, [query, page])

  return (
    <>
      <TextField 
      id="outlined-basic" 
      label="Enter Search Term" 
      variant="outlined" 
      onChange={(e) => setQuery(e.target.value)}
      />
      <List events={events} />
      <Pagination count={10} onChange={(event, page) => setPage(page)} />
    </>
  )
}

export default App;
