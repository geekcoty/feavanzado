import {useEffect, useState} from "react"

function App() {

  const [githubLogin, setGithublogin] = useState ( {} )

  useEffect(()=> {
    async function fetchLogin() {
      const data = await fetch ("https://api.github.com/users/juanigallo")
      const dataJson = await data.json();
      //console.log(dataJson)

        setGithublogin(dataJson.login)
    }

    fetchLogin();

  },[]);

  return (
    <div className="App">
      <p> Login: { githubLogin } </p>
    </div>
  );
}

export default App;
