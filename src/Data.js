import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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
import location from "./Assets/adv-aseets/icons/icon-1.png";
import mail from "./Assets/adv-aseets/icons/icon-2.png";
import mobil from "./Assets/adv-aseets/icons/icon-3.png";
import i1 from "./Assets/adv-aseets/insta/li-0.png";
import i2 from "./Assets/adv-aseets/insta/li-1.png";
import i3 from "./Assets/adv-aseets/insta/li-2.png";
import i4 from "./Assets/adv-aseets/insta/li-3.png";
import i5 from "./Assets/adv-aseets/insta/li-4.png";
import i6 from "./Assets/adv-aseets/insta/li-5.png";
import orderBanner from "./Assets/adv-aseets/adv-form-banner.png";
import smallIcon from "./Assets/adv-aseets/s-solid.svg";
import mediumIcon from "./Assets/adv-aseets/m-solid.svg";
import largeIcon from "./Assets/adv-aseets/l-solid.svg";

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
      name: window.innerWidth <= 500 ? "F. Food" : "Fast Food",
      img: fastFood,
    },
    {
      name: "Drinks",
      img: drinks,
    },
  ],
  menuCards: [
    {
      id: 1,
      img: terminalPizza,
      name: "Terminal Pizza",
      point: 4.9,
      dailyOrder: 200,
      price: 60,
      description:
        "Terminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal Terminal PizzaPizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal PizzaTerminal ",
    },
    {
      id: 2,
      img: positionAbs,
      name: "Position Absolute Acı Pizza",
      point: 4.5,
      dailyOrder: 928,
      price: 85,
      description:
        "Position Absolute Acı PizzaPosition Absolute Acı PizzaPosition Absolute Acı PizzaPosition Absolute Acı PizzaPosition Absolute Acı PizzaPosition Absolute Acı PizzaPosition Absolute Acı PizzaPosition Absolute Acı PizzaPosition Absolute Acı PizzaPosition Absolute Acı PizzaPosition Absolute Acı PizzaPosition Absolute Acı PizzaPosition Absolute Acı ",
    },
    {
      id: 3,
      img: useEffBrg,
      name: "useEffect Tavuklu Burger",
      point: 4.8,
      dailyOrder: 462,
      price: 75,
      description:
        "useEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect Tavuklu BurgeruseEffect ",
    },
  ],
};

export const dataFooter = {
  connection: [
    {
      icon: location,
      name: "Antakya / Hatay / Türkiye",
    },
    {
      icon: mail,
      name: "ysertac96@gmail.com",
    },
    {
      icon: mobil,
      name: "+90 535 741 45 11",
    },
  ],
  instaImg: [i1, i2, i3, i4, i5, i6],
  social: [
    { icon: faFacebook, path: "https://www.facebook.com/ysertacc/" },
    { icon: faInstagram, path: "https://www.instagram.com/ysertacc/" },
    { icon: faLinkedin, path: "https://www.linkedin.com/in/sertacyildirir/" },
    { icon: faGithub, path: "https://www.github.com/ysertac/" },
  ],
};

export const dataOrderPage = {
  banner: orderBanner,
  orderForm: {
    size: [
      {
        id: "s1",
        name: "small",
        icon: smallIcon,
      },
      {
        id: "s2",
        name: "medium",
        icon: mediumIcon,
      },
      {
        id: "s3",
        name: "large",
        icon: largeIcon,
      },
    ],
    thickness: [
      {
        id: "t1",
        name: "thin",
      },
      {
        id: "t2",
        name: "standart",
      },
      {
        id: "t3",
        name: "thick",
      },
    ],
    extras: [
      {
        id: "e1",
        name: "Pepperoni",
      },
      {
        id: "e2",
        name: "Sosis",
      },
      {
        id: "e3",
        name: "Kanada Jambonu",
      },
      {
        id: "e4",
        name: "Tavuk Izgara",
      },
      {
        id: "e5",
        name: "Soğan",
      },
      {
        id: "e6",
        name: "Domates",
      },
      {
        id: "e7",
        name: "Mısır",
      },
      {
        id: "e8",
        name: "Sucuk",
      },
      {
        id: "e9",
        name: "Jalepeno",
      },
      {
        id: "e10",
        name: "Sarımsak",
      },
      {
        id: "e11",
        name: "Biber",
      },
      {
        id: "e12",
        name: "Salam",
      },
      {
        id: "e13",
        name: "Ananas",
      },
      {
        id: "e14",
        name: "Mantar",
      },
      {
        id: "e15",
        name: "Zeytin",
      },
    ],
  },
};
