import { BrowserRouter, Route, Switch } from "react-router-dom/";
import "./App.css";
import HomePage from "./Pages/HomePage";
import OrderPage from "./Pages/OrderPage";
import Successful from "./Pages/Successful";
import Work from "./Deneme/Work";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useState } from "react";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

export const Context = createContext({});
export const ContextProvider = ({ children }) => {
  const [orderData, setOrderData] = useState({});
  const [priceData, setPriceData] = useState(0);
  const [extraPriceData, setExtraPriceData] = useState(0);
  const [totalExtraPriceData, setTotalExtraPriceData] = useState(0);
  const [totalPriceData, setTotalPriceData] = useState(0);
  const values = {
    orderData,
    setOrderData,
  };
  const priceValues = {
    priceData,
    setPriceData,
    extraPriceData,
    setExtraPriceData,
    totalExtraPriceData,
    setTotalExtraPriceData,
    totalPriceData,
    setTotalPriceData,
  };
  return (
    <Context.Provider value={{ values, priceValues }}>
      {children}
    </Context.Provider>
  );
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
            <Route exact path="/admin">
              <Work />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/signup">
              <RegisterPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
