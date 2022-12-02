import { useState, useEffect } from 'react';
import DonutClicker from './components/DonutClicker';
import { Box, Button, Typography } from '@mui/material';
import Donut from './classes/Donut';

const App = () => {
  let myDonut = new Donut('phils donut shop');
  const [donuts, setDonuts] = useState();

  useEffect(() => {
    setDonuts(myDonut.donuts);
  }, [myDonut]);

  return (
    <>
      <h1>test</h1>
      <Typography>{donuts.donuts}</Typography>
      <Typography>{donuts.gameName}</Typography>
      <Button onClick={() => myDonut.clickDonut()}>Add Donut</Button>
      {/* <DonutClicker /> */}
    </>
  );
};

export default App;
