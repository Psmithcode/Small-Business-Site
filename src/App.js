import "./App.css";
import Router from "./Router";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Header />
          <Router />
        </div>
    </Provider>
  );
}

export default App;
