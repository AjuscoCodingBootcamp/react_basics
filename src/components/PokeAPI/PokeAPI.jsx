import { useState, useEffect} from 'react'

const PokeAPI = () => {
     //console.log(props.search)
     const [pokemon, setPokemons] = useState([0])
/*
     useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(data =>{ 
              console.log(data.abilities)
              setPokemons(data)})
        .catch(error => console.log("algo pasó: "+ error))

    }, []); */
      
     useEffect( ()  => {
            console.log('hola')
            setPokemons('2')
      }, []) 

   //src={pokemon.sprites.front_default} 
      setPokemons(3)
      
      return (
            <div>
                <h1>hola {pokemon}</h1>
                  
            </div>
      )
}
export default PokeAPI