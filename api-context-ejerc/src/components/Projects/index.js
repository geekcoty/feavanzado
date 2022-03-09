import Project from "../Projects/Project"
import {useContext} from "react";
import RepoContext from "../../context/RepoContext"

function Projects(props){
  const repos = useContext(RepoContext)
 
  const {avatar, bio} = props;



  return(
    <>
      <div className="projects-container">
        <div className="profile-pic">
          <img src={avatar} alt="user avatar" />
        </div>
        <div className="bio">
        <p> {bio} </p>
        </div>
        <div className="projects">
      <ul>
      {repos.map((project,key) =>{
        return <Project data={project} key={key}/>
      }
      )}






      </ul>













        </div>
      </div>

    </>
  )
}

export default Projects;