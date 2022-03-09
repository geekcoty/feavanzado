import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

import {RepoProvider} from "./context/RepoContext";

import {useEffect, useState} from "react"

function App() {
  // estados
  const [user, setUser] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const [bio, setBio] = useState("")
  const [repos, setRepos] = useState ([])

  //http requests
	useEffect(() => {
		fetchUser()
    fetchRepos()
	}, []);

	async function fetchUser() {
    const dataUser= await fetch("https://api.github.com/users/geekcoty");
		const dataUserJson = await dataUser.json(); 

		setUser(dataUserJson.name);
    setProfilePic(dataUserJson.avatar_url)
    setBio(dataUserJson.bio)
	}
  async function fetchRepos() {
    const dataRepos= await fetch("https://api.github.com/users/geekcoty/repos");
		const dataReposJson = await dataRepos.json()

    setRepos(dataReposJson)
  }

  return (
    <RepoProvider value={repos}>
    <div className="App">
     <Navbar user={user}/>
     <Projects avatar={profilePic} bio={bio}/>
    </div>
    </RepoProvider>
  );
}

export default App;
