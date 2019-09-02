import React, {useState, useEffect} from 'react';
import './App.css';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import Name from "./components/Name";
import GetPerson from './components/GetPerson';
import ShortInfo from "./components/ShortInfo";
// import Films from "./components/Films";
// import Starships from "./components/Starships";
// import Vehicles from "./components/Vehicles";


const App = () => {

const [PersonSW, updatedPersonSW] = useState([{}]);
// const [Index, updatedIndex] = useState(1);

useEffect(() => {
  // GetPerson(updatedIndex, updatedPersonSW)
  GetPerson(updatedPersonSW)
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="Person">
      {PersonSW.map( char => {
      // return <Name key={Index} name = {char.name} />
      return( 
      <div>
        <Name  key = {char.name} name = {char.name} />

        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
          See short info
        </Button>
        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody>
              <ShortInfo key = {char} eyeColor = {char.eye_color} hairColor = {char.hair_color}
                  gender ={char.gender}  height = {char.height} mass = {char.mass} />
            </CardBody>
          </Card>
        </UncontrolledCollapse>

        {/* <Films films = {char.films.title}/> */}
        </div>)
    })}
    </div>
    </div>
  );
}

export default App;
