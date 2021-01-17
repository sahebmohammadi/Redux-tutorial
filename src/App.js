import "./App.css";
import CakeContainer from "./components/CakeContainer/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer/HooksCakeContainer";
import BuyIceCream from "./components/BuyIceCream/BuyIceCream";
import CakeWithPaylod from "./components/CakeWtihPayload/CakeWtihPayload";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <BuyIceCream />
        <CakeWithPaylod />
      </div>
    </Provider>
  );
}

export default App;
