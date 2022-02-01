import React, {useState} from 'react'
import './appearance.css'
import logo from '../../logo.svg';
import lobo from '../../assets/khale.jpg'

const Appearance = () => {
      const [darkMode, setDarkMode] = useState(false)

      const handleClick = () => {
            setDarkMode(!darkMode)
      }
      

      return(
            <div>
                  <header className={ darkMode ? 'App-darkMode' : 'App-dayMode'}>
                        <h1>Appearance</h1>
                        <button  onClick={handleClick}> {darkMode ? 'Dark Mode' : 'Light Mode'}</button>
                        <img src={logo} className="App-logo" alt="logo" />
                        <img src={lobo} className="App-logo" />
                  </header>
            </div>
      )
}

export default Appearance