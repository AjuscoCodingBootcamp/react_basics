import { useState, useEffect} from 'react'

const FetchData = () => {
     const [song, setSongs] = useState([])
     
      useEffect(()=> {
            fetch("https://genius.p.rapidapi.com/search?q=lana%20del%20rey", {
                  "method": "GET",
                  "headers": {
                        "x-rapidapi-host": "genius.p.rapidapi.com",
                        "x-rapidapi-key": "f348c04cecmsh46f94872e1781a4p1bf84djsn1534fb40218a"
                  }
            })
            .then(response => {
                  console.log(response.json);
            })
            .then(data => setSongs(data))
            .catch(err => {
                  console.error(err);
            });
})

      return (
            <div>
                  <h1>Genius API</h1>
                  
            </div>
      )
}
export default FetchData