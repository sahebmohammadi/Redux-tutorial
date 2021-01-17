import { connect } from "react-redux";
import { buyCake } from "../../redux";
import { useState } from "react";

const CakeWithPayload = ({ item, buyCake }) => {
  return (
    <div>
      <h2> Item - {item}</h2>
      {/* <button onClick={() => buyCake(cake)}>Buy {cake} Cake</button> */}
    </div>
  );
};

//? get redux state as prameter :
//? this function accepts two parameters : (redux-state,props of the component itSelf)

const mapStatToProps = (state, ownProps) => {
  //? conditionally assign the reudx state :
  //? if cake props was passed in
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (cake) => dispatch(buyCake(cake)),
  };
};

//? the common use case is when you click on the particular item you pass
//? the Id as props and then fetch the data from redux for that producnt
export default connect(mapStatToProps)(CakeWithPayload);
