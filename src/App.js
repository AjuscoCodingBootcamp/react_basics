import './App.css';
import {Tasks} from './components/Tasks/Task'
import {Counter} from './components/Hooks/counter'
import Clock from './components/Class/Clock';
import { ClockState } from './components/Class/ClockState';
import {Login} from './components/Login/Login'
import {Data} from './components/Data/data'
import Appearance from './components/Appearance/Appearance';

function App() {
  return (
    <div className="App"> 
    <Appearance/>
    <Data/>
    </div>
  );
}

export default App;