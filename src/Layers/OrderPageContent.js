import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { dataHomePage, dataOrderPage } from "../Data";
import { useContext, useEffect, useState } from "react";

import Dropdown from "../Components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Context } from "../App";

const OrderPageContent = () => {
  const { values } = useContext(Context);
  const { id } = useParams();
  const history = useHistory();
  const item = dataHomePage.menuCards.find((item) => item.id == id);
  const order = dataHomePage.menuCards.find((item) => item.id == id);
  const formDataInitial = {
    order: order.name,
    size: "",
    thickness: "",
    extra: [],
    note: "",
  };
  const [formData, setFormData] = useState(formDataInitial);
  const [menuBarText, setMenuBarText] = useState("-Hamur Kalınlığı Seç-");
  const changeHandler = (e) => {
    let { name, type, value, checked } = e.target;
    if (type == "radio") {
      setFormData({ ...formData, [name]: value });
      const radios = document.getElementsByClassName("specialClass");
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].id == value) {
          radios[i].classList.add("bg-specYellow");
          radios[i].classList.remove("bg-specBeige");
        } else {
          radios[i].classList.add("bg-specBeige");
          radios[i].classList.remove("bg-specYellow");
        }
      }
    } else if (type == "button") {
      setFormData({ ...formData, [name]: value });
      setMenuBarText(value);
      document.getElementById("dropdownHeader").classList.add("bg-specYellow");
      document
        .getElementById("dropdownHeader")
        .classList.remove("bg-specBeige");
    } else if (type == "checkbox") {
      const checkboxes = document.getElementsByClassName("checkboxClass");
      if (checked) {
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].id == value) {
            checkboxes[i].classList.add("bg-specYellow");
            checkboxes[i].classList.remove("bg-specBeige");
            checkboxes[i]
              .querySelector(".checkboxIcon")
              .classList.remove("hidden");
          }
        }
        const controlValue = formData[name].find((item) => item == value);
        if (controlValue == null) {
          setFormData({ ...formData, [name]: [...formData[name], value] });
        }
      } else {
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].id == value) {
            checkboxes[i].classList.remove("bg-specYellow");
            checkboxes[i].classList.add("bg-specBeige");
            checkboxes[i]
              .querySelector(".checkboxIcon")
              .classList.add("hidden");
          }
        }
        const controlValue = formData[name].findIndex((item) => item == value);
        formData[name].splice(controlValue, 1);
        setFormData({ ...formData, [name]: formData[name] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    values.setOrderData(formData);
  }, [formData]);

  const submitHandler = () => {
    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => console.log(res.data));
    history.push("/success");
  };

  return (
    <>
      <section className="bg-specBeige">
        <div className="w-3/4 mx-auto">
          <img src={dataOrderPage.banner} className="mx-auto" />
          <p className="text-lg text-specDimGrey font-barlow font-semibold pt-10">
            Anasayfa - Seçenekler -{" "}
            <span className="text-specRed">Sipariş Oluştur</span>
          </p>
          <h2 className="text-xl text-specDimGrey font-barlow font-semibold pt-10">
            {item.name}
          </h2>
          <div className="flex justify-between pt-10 items-center">
            <div className="text-4xl font-bold">{item.price}₺</div>
            <div className="flex w-1/6 justify-between text-specLightGrey text-xl font-bold">
              <div>{item.point}</div>
              <div>{"(" + item.dailyOrder + ")"}</div>
            </div>
          </div>
          <p className="w-2/3 pt-10 text-specDimGrey text-lg font-barlow font-semibold text-justify pb-10">
            {item.description}
          </p>
        </div>
      </section>
      <section>
        <form onSubmit={submitHandler} className="w-3/4 mx-auto">
          <div className="flex justify-between my-16">
            <div>
              <h2 className="text-xl font-bold">
                Boyut Seç <span className="text-specRed">*</span>
              </h2>
              <div className="mt-5 flex">
                {dataOrderPage.orderForm.size.map((size) => (
                  <div className="relative mr-5">
                    <input
                      type="radio"
                      role="radio"
                      name="size"
                      value={size.name}
                      className={`w-10 h-10 rounded-full absolute cursor-pointer z-[2] opacity-0`}
                      onChange={changeHandler}
                    />
                    <div
                      id={size.name}
                      className={`w-10 h-10 rounded-full flex justify-center items-center specialClass bg-specBeige`}
                    >
                      <img src={size.icon} className="w-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/6">
              <h2 className="text-xl font-bold text-right">
                Hamur Seç <span className="text-specRed">*</span>
              </h2>
              <Dropdown
                items={dataOrderPage.orderForm.thickness}
                changeHandler={changeHandler}
                menuBarText={menuBarText}
              />
            </div>
          </div>
          <div className="flex w-full justify-between my-16">
            <div className="w-[47%]">
              <h2 className="text-xl font-bold">Extra Malzemeler</h2>
              <div className="flex justify-between flex-wrap w-full">
                {dataOrderPage.orderForm.extras.map((item) => (
                  <label className="w-1/3 flex mt-5 items-center cursor-pointer">
                    <div className="flex items-center relative">
                      <input
                        type="checkbox"
                        name="extra"
                        value={item.name}
                        className="w-9 h-9 z-[2] opacity-0 cursor-pointer"
                        onChange={changeHandler}
                      />
                      <div
                        id={item.name}
                        className="w-10 h-10 border-2 absolute bg-specBeige cursor-pointer checkboxClass flex justify-center items-center"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="w-5/6 h-5/6 hidden checkboxIcon"
                        />
                      </div>
                    </div>
                    <span className="pl-5 font-barlow font-semibold">
                      {item.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="w-[47%]">
              <h2 className="text-xl font-bold text-right">Sipariş Notu</h2>
              <div>
                <textarea
                  onChange={changeHandler}
                  name="note"
                  className="border-2 w-full mt-5 bg-specBeige focus:bg-specYellow pt-3 pl-3 h-36"
                ></textarea>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Sipariş ver"
            className="bg-specDimGrey text-white text-lg font-barlow font-semibold mb-16 px-7 py-3 rounded-xl hover:bg-specYellow hover:text-specDimGrey duration-200 cursor-pointer"
          />
        </form>
      </section>
    </>
  );
};
export default OrderPageContent;
