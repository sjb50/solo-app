import React,{Component} from 'react';
import Product from './product';

class StoreFront extends Component {
  state = {
      products : []
  }

  componentDidMount() {
   fetch("http://localhost:2000")
   .then(response => response.json())
   .then(data => this.setState({products:data}))
   .catch((err)=>{
     console.log(err)
   })
 }

  render(){
  return(
    <div>
      <form>
        <input type="text" placeholder="Search...."/>
        <input type="Submit" placeholder="Search...." value="search"/>
      </form>
      <Product id ="store-grid" items={this.state.products}/>
    </div>
    )
  }
}

export default StoreFront;
