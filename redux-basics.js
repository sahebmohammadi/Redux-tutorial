const redux = require("redux");
// import redux from "redux";
const createStore = redux.createStore;
const BUY_CAKE = "BUT_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
//? ACTION
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}
function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    value: 5,
  };
}
//? REDUCER : (prevState,action)=> newState
const initialState = {
  numberOfCakes: 10,
  numberOfIcecreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case "BUY_ICECREAM":
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - action.value,
      };
    default:
      return state;
  }
};

//? STORE
const store = createStore(reducer);

//? DISPATCHING AN ACTION :
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCake());
store.dispatch(buyIcecream());

//? SUBSCRIPTION :
unsubscribe();
