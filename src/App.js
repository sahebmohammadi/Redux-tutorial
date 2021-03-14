import "./App.css";
import CakeContainer from "./components/CakeContainer/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer/HooksCakeContainer";
import BuyIceCream from "./components/BuyIceCream/BuyIceCream";
import CakeWithPaylod from "./components/CakeWtihPayload/CakeWtihPayload";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import UserContainer from "./components/USerContainer/UserContainer";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <CakeContainer />
        {/* <HooksCakeContainer /> */}
        {/* <BuyIceCream /> */}
        {/* <CakeWithPaylod /> */}
        {/* <ItemContainer cake /> */}
        {/* <ItemContainer /> */}
      </div>
    </Provider>
  );
}

export default App;


