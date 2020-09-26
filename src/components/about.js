import React,{Component} from 'react';
import Item from "./getPost";

class About extends Component{
  state={
    data:["sam bedell","jax"]
  }

  componentDidMount() {
    fetch("https://discord.com/api/v6")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items:null
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){
  return(
    <div>
      <h1>ABOUT</h1>
      <Item name={this.state.data}/>
    </div>
  )
}}

export default About;
