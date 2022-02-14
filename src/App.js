import './App.css';
import {Tasks} from './components/Tasks/Task'
import {Counter} from './components/Hooks/counter'
import Clock from './components/Class/Clock';
import { ClockState } from './components/Class/ClockState';
import {Login} from './components/Login/Login'
import {Data} from './components/Data/data'
import Appearance from './components/Appearance/Appearance';
import FetchData from './components/FetchData/FetchData';
import PokeSearcher from './components/PokeAPI/PokeSearcher';
import { Rick_Morty } from './components/Rick&Morty/Rick&Morty';
import PokeAPI from './components/PokeAPI/PokeAPI';

function App() {
  return (
    <div className="App"> 
    <Appearance/>
    <Counter/>
    </div>
  );
}

export default App;