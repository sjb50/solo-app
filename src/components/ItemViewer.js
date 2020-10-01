import React,{Component} from 'react';
// import {connect} from 'react-redux';

const ItemViewer = (item) => {
  const items = item.location
  return(
    <div>
      <img src={"http://localhost:2000/"+items.image}></img>
      <h1>{items.name}</h1>
      <button>Add to cart</button>
    </div>
  )
}

export default ItemViewer;
