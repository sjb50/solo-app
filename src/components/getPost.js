import React from 'react';

 const Item =(props)=> {

   return(
     props.name.map((name)=>
     <div>hello {name}</div>
     )
   )
}

 export default Item;
