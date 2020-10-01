const initState = {
  item: [
    {name:"shirt",price:19.99},
    {name:"pants",price:19.99}
  ]
}

const rootReducer = (state=initState,action) => {
  return state;
}

export default rootReducer;
