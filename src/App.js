import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Sidebar />
        <Main />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
