import logo from "./Assets/logo.svg";
import all from "./Assets/adv-aseets/icons/1.svg";
import pizza from "./Assets/adv-aseets/icons/2.svg";
import burger from "./Assets/adv-aseets/icons/3.svg";
import fries from "./Assets/adv-aseets/icons/4.svg";
import fastFood from "./Assets/adv-aseets/icons/5.svg";
import drinks from "./Assets/adv-aseets/icons/6.svg";
import terminalPizza from "./Assets/adv-aseets/food-1.png";
import positionAbs from "./Assets/adv-aseets/food-2.png";
import useEffBrg from "./Assets/adv-aseets/food-3.png";

export const dataHomePage = {
  header: {
    img: logo,
  },
  banner: {},
  underBanner: [
    {
      name: "All",
      img: all,
    },
    {
      name: "Pizza",
      img: pizza,
    },
    {
      name: "Burger",
      img: burger,
    },
    {
      name: "Fries",
      img: fries,
    },
    {
      name: "Fast Food",
      img: fastFood,
    },
    {
      name: "Drinks",
      img: drinks,
    },
  ],
  menuCards: [
    {
      img: terminalPizza,
      name: "Terminal Pizza",
      point: 4.9,
      dailyOrder: 200,
      price: 60,
    },
    {
      img: positionAbs,
      name: "Position Absolute Acı Pizza",
      point: 4.5,
      dailyOrder: 928,
      price: 85,
    },
    {
      img: useEffBrg,
      name: "useEffect Tavuklu Burger",
      point: 4.8,
      dailyOrder: 462,
      price: 75,
    },
  ],
};
