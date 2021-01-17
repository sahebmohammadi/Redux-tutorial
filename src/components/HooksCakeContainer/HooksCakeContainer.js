import { buyCake } from "../../redux";
import { useSelector, useDispatch } from "react-redux";

const HooksCakeContainer = (props) => {
  //?  this hooks accepts a function as its parameter : the selector function
  //? selector fucntion receive redux stats as arguments === mapTostate
  //? useSelector hooks returns whatever returns by selector function
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);

  //?  useDispatch hooks returns a reference to the dispatch function in redux store
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Number of Cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
