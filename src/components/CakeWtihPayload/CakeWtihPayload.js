import { connect } from "react-redux";
import { buyCake } from "../../redux";
import { useState } from "react";

const CakeWithPayload = ({ numberOfCakes, buyCake }) => {
  const [cake, setCake] = useState(0);

  return (
    <div>
      <h2> Number of Cakes - {numberOfCakes}</h2>
      <input
        type="text"
        value={cake}
        onChange={(e) => setCake(e.target.value)}
      />
      <button onClick={() => buyCake(cake)}>Buy {cake} Cake</button>
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
    buyCake: (cake) => dispatch(buyCake(cake)),
  };
};

export default connect(mapStatToProps, mapDispatchToProps)(CakeWithPayload);
