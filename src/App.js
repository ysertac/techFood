import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import HomePage from "./Pages/HomePage";
import OrderPage from "./Pages/OrderPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/order/:id">
            <OrderPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
