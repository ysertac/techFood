import { BrowserRouter, Route, Switch } from "react-router-dom/";
import "./App.css";
import HomePage from "./Pages/HomePage";
import OrderPage from "./Pages/OrderPage";
import Successful from "./Pages/Successful";
import { createContext, useState } from "react";

export const Context = createContext({});
export const ContextProvider = ({ children }) => {
  const [orderData, setOrderData] = useState({});
  const values = {
    orderData,
    setOrderData,
  };
  return <Context.Provider value={{ values }}>{children}</Context.Provider>;
};

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/order/:id">
              <OrderPage />
            </Route>
            <Route exact path="/success">
              <Successful />
            </Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
