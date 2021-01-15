const redux = require("redux");
const store = redux.createStore();
const BUY_CAKE = "BUT_CAKE";

//? ACTION
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}
//? REDUCER : (prevState,action)=> newState
const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

//?
