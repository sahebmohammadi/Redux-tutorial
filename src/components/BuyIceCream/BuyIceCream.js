import { connect } from "react-redux";
import { buyIceCream } from "../../redux";

const BuyIceCream = (props) => {
  return (
    <div>
      <h2> Number of Cakes - {props.numberOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy 5 Ice cream</button>
    </div>
  );
};

//? get redux state as prameter :
const mapStatToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStatToProps, mapDispatchToProps)(BuyIceCream);
