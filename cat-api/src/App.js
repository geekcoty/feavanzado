import "./style.css"
import {useEffect, useState} from "react";

function App() {

const [gato, setGato] = useState ( "" )

  useEffect(()=> {
    async function fetchGato() {
      const dataGato = await fetch ("https://api.thecatapi.com/v1/images/search")
      const dataJson = await dataGato.json();

    
        console.log(dataJson[0].url)

        setGato(dataJson[0].url)
    }

    fetchGato();

  },[]);

  return (
    <div className="App">
      <img src={ gato } />
    </div>
  );
}

export default App;
