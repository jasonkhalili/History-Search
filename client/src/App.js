import { useEffect } from 'react';
import axios from 'axios';

const App = () => {

  useEffect(() => {
    axios.get('http://localhost:3200/events?_page=1')
      .then(res => {
        console.log(res.data);
      })
  })

  return (
    <h1>It works</h1>
  );
}

export default App;
