import logo from './logo.svg';
import './App.css';
import {Tasks} from './components/Tasks/Task'
import {Counter} from './components/Hooks/counter'
import Clock from './components/Class/Clock';
import { ClockState } from './components/Class/ClockState';
import {Login} from './components/Login/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
   <Login userLogin={true}/>
    </div>
  );
}

export default App;