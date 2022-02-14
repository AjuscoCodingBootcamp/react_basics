import { useState, useEffect} from 'react'

const Rick_Morty = () => {
     
     const [characters, setCharacters] = useState([])
      
     useEffect(()  => {
           
      const fetchData = async () => {
            try {
                  const response = await fetch("https://rickandmortyapi.com/api/character")
                  const dataJson = await response.json()
                  console.log(dataJson)
                  setCharacters(dataJson.results)
            }
            catch (error) {
                  console.log("error: ", error)

            }
     }
      fetchData()

      }, [])
   //src={pokemon.sprites.front_default} 

      return (
            <div>
                  <h1>Rick and Morty API</h1>
                  <h2>Characters</h2>
                  {characters.map(character => (
                        <div key={character.id}>
                              <h2>{character.name}</h2>
                              <h3>{character.species}</h3>
                              <img src={character.image} alt={character.name}/>
                        </div>
                  ))}
                 
            </div>
      )
}
export {Rick_Morty}