import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: {}
    };
  }



  async componentDidMount() {
    const dataFetch = await fetch("https://api.github.com/users/juanigallo")
    const jsonData = await dataFetch.json();

    this.setState({
      data: jsonData
    });
    console.log(jsonData)
  }
  
  render() {
   return (
    <>
    <p> hola mundo </p>
    {this.state.data.login}
    </>
    )
  }
}

export default App;