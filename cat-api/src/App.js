import "./style.scss"
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
      <div className="CatPic">
        <img src={ gato } className="Cat"/>
      </div>
    </div>
  );
}

export default App;
