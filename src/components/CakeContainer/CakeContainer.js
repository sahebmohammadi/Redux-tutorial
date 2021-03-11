import { connect } from "react-redux";
import { buyCake } from "../../redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2> Number of Cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

//? get redux state as prameter :
const mapStatToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStatToProps, mapDispatchToProps)(CakeContainer);

