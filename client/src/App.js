import { useEffect, useState } from 'react';
import { Container, TextField, Pagination, Typography } from '@mui/material';
import axios from 'axios';

import List from './List';

const App = () => {

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState([]);
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:3200/events?q=${query}`)
      .then(res => {
        setNumPages(Math.ceil(res.data.length / 10));
      })
    axios.get(`http://localhost:3200/events?q=${query}&_page=${page}`)
      .then(res => {
        setEvents(res.data);
      })
  }, [query, page])

  return (
    <>
      <Container maxWidth="xl">
        <Typography sx={{ marginTop: '20px' }}variant={'h4'}>Historical Search:</Typography>
        <TextField
        sx={{ marginBottom: '10px', marginTop: '10px' }}
        fullWidth
        id="outlined-basic" 
        label="Enter Search Term" 
        variant="outlined" 
        onChange={(e) => setQuery(e.target.value)}
        />
        <List events={events} />
        <Pagination
        sx={{ marginTop: '10px' }}
        count={numPages} 
        onChange={(event, page) => setPage(page)} 
        />
      </Container>
    </>
  )
}

export default App;
