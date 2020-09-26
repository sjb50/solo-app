import React from 'react';
import sweatshirt from "../store-images/sweatshirt.jpg"

const Product =(props)=> {
  return(
    <div class="store-item">
      <figure>
        <img src={props.path} alt="Trulli"/>
          <figcaption><a href="#">{props.name}</a></figcaption>
      </figure>
    </div>
  )
}

export default Product;
