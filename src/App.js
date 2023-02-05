import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Sidebar />
      <Main />
    </Provider>
  );
}

export default App;
