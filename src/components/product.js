import React from 'react';
import sweatshirt from "../store-images/sweatshirt.jpg"
import Card from "react-bootstrap/Card";
import {Link,withRouter} from "react-router-dom"


const Product = ({items}) => {

  const itemList = items.map(item => {
  return(
    <div className="itemCard" key={item.Item_Number}>
      <Link to="/ItemViewer">
        <div className="image-container">
          <img variant="top" style={{height: "190px"}}  src={"http://localhost:2000/"+item.Image_Name} alt={item.Image_Name}/>
        </div>
        <p id={"item-Name-"+item.Item_Name} className="item-name">{item.Item_Name}</p>
        <p id={"item-price-"+item.Item_Name} className="item-price">{item.price}</p>
      </Link>
    </div>
    )
  })
  return (
    <div id="store-grid">
      {itemList}
    </div>
  )
}

export default Product;
