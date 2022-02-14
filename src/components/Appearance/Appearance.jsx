import React, {useState, useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import './appearance.css'
import logo from '../../logo.svg';
import lobo from '../../assets/khale.jpg'

const Appearance = () => {
      const [darkMode, setDarkMode] = useState(false)
      const color = useContext(ThemeContext)
      
      const handleClick = () => {
            setDarkMode(!darkMode)
      }

      return(
            <div>
                  <header className={ darkMode ? 'App-darkMode' : 'App-dayMode'}>
                        <h1 style={{color}}>Appearance</h1>
                        <button  onClick={handleClick}> {darkMode ? 'Dark Mode' : 'Light Mode'}</button>
                        <img src={logo} className="logo" alt="logo" />
                       
                  </header>
            </div>
      )
}

export default Appearance