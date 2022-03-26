import React from "react"
import {connect} from "react-redux"

import Input from "./components/Input"
import Buton from "./components/Button"
import Tasks from "./components/Tasks"


class App extends React.Component{
  render(){
    return (
      <>
      <Input/>
      <Buton/>
      <Tasks/>
      </>
    )
  }
}


export default connect() (App);
