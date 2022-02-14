import React from 'react'
import PokeAPI from './PokeAPI'

const PokeSearcher = () => {
      let pokemonToSearch;
      const handleInputChange = (event) => {
            console.log(event.target.value)
           pokemonToSearch= event.target.value
      }

      return (
            <div>
                  <p>Buscador de pokemones: </p>
                  <input onChange={handleInputChange}/>
                  <PokeAPI search={pokemonToSearch}/>
            </div>

      )
}

export default PokeSearcher