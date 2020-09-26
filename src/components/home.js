import React,{Component} from 'react';
import Product from './product';

class Home extends Component {
  state = {
        name:"SweatShirt",
        description:"shirt",
        path:"../store-images/sweatshirt.jpg"
  }
  componentDidMount(){
    console.log("success")
  }
  render(){
  return(
    <div>
      <h1>Homepage</h1>
      <p>This is the Homepage</p>
      <Product props={this.state.products}/>
    </div>
  )
}
}

export default Home;
