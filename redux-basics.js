const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//? ACTION
const BUY_CAKE = "BUT_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}
function buyIcecream(value) {
  return {
    type: BUY_ICECREAM,
    value: value,
  };
}
//? REDUCER : (prevState,action)=> newState
const initialCakeState = {
  numberOfCakes: 10,
};
const initialIcecreamState = {
  numberOfIcecreams: 20,
};
const cakeReducer = (state = initialCakeState, action) => {
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
const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
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
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = createStore(rootReducer, applyMiddleWare(logger));

//? DISPATCHING AN ACTION :
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCake());
store.dispatch(buyIcecream(4));

//? SUBSCRIPTION :
unsubscribe();
