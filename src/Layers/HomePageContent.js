import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import MenuCards from "../Components/MenuCards";

import { dataHomePage } from "../Data";
import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const HomePageContent = () => {
  const { priceValues } = useContext(Context);
  const welcome = () => toast("Welcome");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://techfood.up.railway.app/techfood/food", {
        auth: {
          username: "generalUser",
          password: "generalUser",
        },
      })
      .then((res) => setProducts(res.data));

    welcome();
  }, []);
  console.log(products);
  return (
    <>
      <ToastContainer
        autoClose={1500}
        hideProgressBar={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section
        className={
          "bg-[url('/src/Assets/mvp-banner.png')] h-[90vh] flex flex-col items-center pt-1 text-center bg-cover bg-center"
        }
      >
        <div className="flex flex-col mt-14 h-56 justify-between">
          <p className="text-specYellow font-satisfy text-2xl">
            fırsatı kaçırma
          </p>
          <p className="text-white text-5xl font-barlow font-light max-mobile:text-[42px]">
            KOD ACIKTIRIR
          </p>
          <p className="text-white text-5xl font-barlow font-light max-mobile:text-[42px]">
            PIZZA, DOYURUR
          </p>
          <a className="bg-specYellow mobile:px-10 mobile:py-4 mx-auto rounded-full w-1/2 font-medium hover:bg-specLightGrey hover:text-white duration-200 max-mobile:w-1/3 max-mobile:py-2 max-mobile:px-5">
            ACIKTIM
          </a>
        </div>
      </section>
      <section className="w-3/4 max-mobile:w-11/12 mx-auto flex justify-between">
        {dataHomePage.underBanner
          .filter((item) => item.name !== "All")
          .map((item) => (
            <div className="flex max-mobile:flex-col max-mobile:justify-center items-center my-6 max-mobile:w-1/5">
              <img src={item.img} className="max-mobile:w-3/5" />
              <p className="mobile:pl-5 font-semibold">{item.name}</p>
            </div>
          ))}
      </section>
      <section className="bg-specBeige">
        <div className="w-3/4 flex max-mobile:flex-col max-mobile:w-11/12 mx-auto justify-between max-mobile:justify-between max-mobile:h-[950px]  py-32">
          <div className="w-[49%] max-mobile:w-full max-mobile:bg-center h-[600px] max-mobile:h-[33%] bg-[url('/src/Assets/adv-aseets/kart-1.png')] bg-cover rounded-3xl">
            <div className="text-white mt-10 ml-10 max-mobile:ml-5 max-mobile:mt-5 font-semibold flex flex-col justify-between">
              <p className="font-quattrocento text-6xl max-mobile:text-4xl">
                Özel
              </p>
              <p className="font-quattrocento text-6xl max-mobile:text-4xl">
                Lezzetus
              </p>
              <p className="text-lg">Position: Absolute Acı Burger</p>
              <a className="mobile:px-12 py-4 max-mobile:py-3 bg-white text-specRed font-bold w-[27%] max-mobile:w-[35%] text-center rounded-full hover:bg-specLightGrey hover:text-white duration-200">
                SİPARİŞ VER
              </a>
            </div>
          </div>
          <div className="w-[49%] max-mobile:w-full flex flex-col max-mobile:h-[64%] justify-between">
            <div className="bg-[url('/src/Assets/adv-aseets/kart-2.png')] h-[48%] bg-cover rounded-2xl">
              <div className="text-white mt-10 ml-10 max-mobile:ml-5 max-mobile:mt-5 font-semibold flex flex-col h-3/5 justify-between">
                <p className="font-quattrocento text-4xl max-mobile:text-3xl">
                  Hackathlon
                </p>
                <p className="font-quattrocento text-4xl max-mobile:text-3xl">
                  Burger Menü
                </p>
                <a className="mobile:px-10 py-4 max-mobile:py-3 bg-white text-specRed font-bold w-[27%] max-mobile:w-[35%] text-center rounded-full hover:bg-specLightGrey hover:text-white duration-200">
                  SİPARİŞ VER
                </a>
              </div>
            </div>
            <div className="bg-[url('/src/Assets/adv-aseets/kart-3.png')] h-[48%] bg-cover rounded-2xl">
              <div className="text-black mt-10 ml-10 max-mobile:ml-5 max-mobile:mt-5 font-semibold flex flex-col h-3/5 justify-between">
                <p className="font-quattrocento text-4xl max-mobile:text-3xl">
                  <span className="text-specRed">Çoooook</span> hızlı
                </p>
                <p className="font-quattrocento text-4xl max-mobile:text-3xl">
                  npm gibi kurye
                </p>
                <a className="mobile:px-10 py-4 max-mobile:py-3 bg-white text-specRed font-bold w-[27%] max-mobile:w-[35%] text-center rounded-full hover:bg-specLightGrey hover:text-white duration-200">
                  SİPARİŞ VER
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-specBeige">
        <div className="w-3/4 max-mobile:w-11/12 mx-auto flex flex-col items-center">
          <p className="text-specRed font-satisfy font-bold text-2xl">
            en çok paketlenen menüler
          </p>
          <h2 className="text-black font-bold text-5xl max-mobile:w-full font-barlow pt-10 max-mobile:text-2xl text-center">
            Acıktıran Kodlara Doyuran Lezzetler
          </h2>
          <div className="flex justify-between w-full mt-10">
            {dataHomePage.underBanner.map((item) => (
              <div className="flex items-center mobile:bg-white mobile:hover:bg-specDimGrey mobile:hover:text-white duration-200 justify-center w-[12%] max-mobile:w-1/6 py-4 rounded-full max-mobile:flex-col cursor-pointer">
                <img src={item.img} className="max-mobile:w-3/5" />
                <p className="mobile:pl-5 font-semibold text-[100%]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between flex-wrap w-full my-16 mb-20 max-mobile:h-[1500px] content-between">
            {products.map((item) => (
              <NavLink
                className="mobile:w-[32%] max-mobile:w-full"
                to={`/order/${item.id}`}
                onClick={() => priceValues.setPriceData(item.price)}
              >
                <MenuCards item={item} />
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePageContent;
