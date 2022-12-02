import { useState, useEffect } from 'react';
import DonutClicker from './components/DonutClicker';
import { Box, Button, Typography } from '@mui/material';
import Donut from './classes/Donut';
import {Buildings, Toes,UnpaidIntern,Cook,Grandpa,Farm,Rig,Bank,Church,Bezos} from './classes/Buildings';

const App = () => {
  let myDonut = new Donut('phils donut shop');
  let myToes = new Toes()
  const [donuts, setDonuts] = useState();

  useEffect(() => {
    setDonuts(myDonut.donuts);
  }, [myDonut]);

  return (
    <>
      <h1>test</h1>
      {/* <Typography>{donuts.donuts}</Typography>*/}
      <Typography>{myDonut.gameName}</Typography> 
      
      <Button onClick={() => console.log(myToes)}>Add Donut</Button>
      
      <Button onClick={() => {myToes.increaseBuildingCost(); console.log(myToes)}}> Buy Toes</Button>
      {/* <DonutClicker /> */}
    </>
  );
};

export default App;
