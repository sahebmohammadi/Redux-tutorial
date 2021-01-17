import "./App.css";
import CakeContainer from "./components/CakeContainer/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer/HooksCakeContainer";
import BuyIceCream from "./components/BuyIceCream/BuyIceCream";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <BuyIceCream />
      </div>
    </Provider>
  );
}

export default App;
