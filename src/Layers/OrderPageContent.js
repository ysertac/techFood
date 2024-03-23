import { useHistory, useParams } from "react-router-dom";
import { dataOrderPage } from "../Data";
import { useContext, useEffect, useState } from "react";

import Dropdown from "../Components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Context } from "../App";
import { useForm } from "react-hook-form";

const OrderPageContent = () => {
  const { values, priceValues } = useContext(Context);
  const [product, setProduct] = useState({});
  const [extras, setExtras] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const formDataInitial = {
    order: "",
    size: "",
    thickness: "",
    extra: [],
    note: "",
    number: 1,
  };
  const [formData, setFormData] = useState(formDataInitial);
  const errorInit = {
    size: "",
    thickness: "",
    extra: "",
  };
  const [validation, setValidation] = useState({
    size: false,
    thickness: false,
  });
  const [errorMessages, setErrorMessages] = useState(errorInit);
  const [menuBarText, setMenuBarText] = useState("-Hamur Kalınlığı Seç-");

  const changeHandler = (e) => {
    let { name, type, value, checked } = e.target;
    if (type == "radio") {
      setFormData({ ...formData, [name]: value });
      setValidation({ ...validation, [name]: true });
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
      setValidation({ ...validation, [name]: true });
      setMenuBarText(value);
      document.getElementById("dropdownHeader").classList.add("bg-specYellow");
      document
        .getElementById("dropdownHeader")
        .classList.remove("bg-specBeige");
    } else if (type == "checkbox") {
      const checkboxes = document.getElementsByClassName("checkboxClass");
      formData.extra.length >= 5
        ? setValidation({ ...validation, extra: false })
        : setValidation({ ...validation, extra: true });

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
          priceValues.setExtraPriceData(priceValues.extraPriceData + 5);
          priceValues.setTotalExtraPriceData(
            formData.number * priceValues.extraPriceData + 5 * formData.number
          );
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
        const controlValue = formData[name].find((item) => item == value);

        setFormData({
          ...formData,
          [name]: [...formData[name].filter((item) => item != controlValue)],
        });
        priceValues.setExtraPriceData(priceValues.extraPriceData - 5);
        priceValues.setTotalExtraPriceData(
          formData.number * priceValues.extraPriceData - 5 * formData.number
        );
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    axios
      .get("https://techfood.up.railway.app/techfood/food/" + id, {
        auth: {
          username: "generalUser",
          password: "generalUser",
        },
      })
      .then((res) => setProduct(res.data));

    axios
      .get("https://techfood.up.railway.app/techfood/extra", {
        auth: {
          username: "generalUser",
          password: "generalUser",
        },
      })
      .then((res) => setExtras(res.data));
  }, []);

  useEffect(() => {
    setFormData({ ...formData, order: product.name });
  }, [product]);

  useEffect(() => {
    values.setOrderData(formData);
  }, [formData]);

  useEffect(() => {
    priceValues.setTotalPriceData(priceValues.priceData * formData.number);
    priceValues.setTotalExtraPriceData(
      priceValues.extraPriceData * formData.number
    );
  }, [formData.number]);

  useEffect(() => {
    const checkboxInputs = document.getElementsByClassName("checkboxInput");
    if (formData.extra.length >= 5) {
      setErrorMessages({
        ...errorMessages,
        extra: "En fazla 5 adet seçebilirsiniz!",
      });
      for (let i = 0; i < checkboxInputs.length; i++) {
        formData.extra.find((extra) => checkboxInputs[i].value == extra) == null
          ? (checkboxInputs[i].disabled = true)
          : (checkboxInputs[i].disabled = false);
      }
    } else {
      setErrorMessages({
        ...errorMessages,
        extra: "",
      });
      for (let i = 0; i < checkboxInputs.length; i++) {
        checkboxInputs[i].disabled = false;
      }
    }
  }, [formData.extra]);

  const submitHandler = () => {
    if (!validation.size || !validation.thickness) {
      if (!validation.size && !validation.thickness) {
        setErrorMessages({
          ...errorMessages,
          size: "Size is required",
          thickness: "Thickness is required",
        });
      } else if (!validation.size) {
        setErrorMessages({
          ...errorMessages,
          size: "Size is required",
          thickness: "",
        });
      } else if (!validation.thickness) {
        setErrorMessages({
          ...errorMessages,
          thickness: "Thickness is required",
          size: "",
        });
      }
    } else {
      axios
        .post("https://reqres.in/api/users", formData)
        .then((res) => console.log(res.data));
      history.push("/success");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const add = () => {
    setFormData({ ...formData, number: formData.number + 1 });
  };

  const remove = () => {
    if (formData.number > 1) {
      setFormData({ ...formData, number: formData.number - 1 });
    }
  };

  return (
    <>
      <section className="bg-specBeige">
        <div className="w-3/4 max-mobile:w-11/12 mx-auto">
          <img src={dataOrderPage.banner} className="mx-auto" />
          <p className="text-lg text-specDimGrey font-barlow font-semibold pt-10">
            Anasayfa - Seçenekler -{" "}
            <span className="text-specRed">Sipariş Oluştur</span>
          </p>
          <h2 className="text-xl text-specDimGrey font-barlow font-semibold pt-10">
            {product?.name}
          </h2>
          <div className="flex max-mobile:w-full justify-between pt-10 items-center">
            <div className="text-4xl max-mobile:text-3xl max-mobile:w-1/2 font-bold">
              {product?.price}₺
            </div>
            <div className="flex w-1/6 max-mobile:w-1/2 items-center justify-between text-specLightGrey text-xl font-bold">
              <div>{product?.point}</div>
              <div>{"(" + product?.dailyOrder + ")"}</div>
            </div>
          </div>
          <p className="w-2/3 max-mobile:w-full pt-10 text-specDimGrey text-lg font-barlow font-semibold text-justify pb-10 max-mobile:text-sm">
            {product?.description}
          </p>
        </div>
      </section>
      <section>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-3/4 max-mobile:w-11/12 mx-auto"
        >
          <div className="flex max-mobile:w-full max-mobile:h-60 max-mobile:flex-col justify-between items-start mobile:my-16 max-mobile:mt-16">
            <div className="max-mobile:w-full">
              <h2 className="text-xl font-bold">
                Boyut Seç <span className="text-specRed">*</span>
              </h2>
              <div className="mt-5 flex items-center">
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
              <p
                id="sizeValidation"
                className="text-specRed font-semibold pt-5"
              >
                {errorMessages.size}
              </p>
            </div>
            <div className="w-1/6 max-mobile:w-2/3">
              <h2 className="text-xl font-bold text-right max-mobile:text-left">
                Hamur Seç <span className="text-specRed">*</span>
              </h2>
              <Dropdown
                items={dataOrderPage.orderForm.thickness}
                changeHandler={changeHandler}
                menuBarText={menuBarText}
              />

              <p
                id="thicknessValidation"
                className="text-specRed font-semibold pt-5"
              >
                {errorMessages.thickness}
              </p>
            </div>
          </div>
          <div className="flex w-full max-mobile:flex-col justify-between mobile:my-16 max-mobile:mt-8 border-b-2 border-b-black pb-16">
            <div className="w-[47%] max-mobile:w-full">
              <h2 className="text-xl font-bold">Extra Malzemeler</h2>
              <p
                id="thicknessValidation"
                className="text-specRed font-semibold"
              >
                {errorMessages.extra}
              </p>
              <div className="flex justify-between flex-wrap w-full">
                {extras?.map((item) => (
                  <label className="w-1/3 flex mt-5 items-center cursor-pointer">
                    <div className="flex items-center relative">
                      <input
                        type="checkbox"
                        name="extra"
                        id={item.id}
                        value={item.name}
                        className="w-9 h-9 z-[2] opacity-0 cursor-pointer checkboxInput"
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
                    <span className="pl-5 max-mobile:pl-2 font-barlow font-semibold max-mobile:text-[85%]">
                      {item.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="w-[47%] max-mobile:mt-10 max-mobile:w-full">
              <h2 className="text-xl font-bold text-right max-mobile:text-left">
                Sipariş Notu
              </h2>
              <div>
                <textarea
                  onChange={changeHandler}
                  name="note"
                  className="border-2 w-full mt-5 bg-specBeige focus:bg-specYellow pt-3 pl-3 h-36"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex max-mobile:flex-col max-mobile:justify-between max-mobile:h-96 max-mobile:mt-16 mx-auto justify-evenly items-center">
            <div className="">
              <span
                disabled={formData.number == 1}
                className="bg-specBeige text-xl font-semibold p-5 rounded-l-full hover:text-specRed cursor-pointer"
                onClick={remove}
              >
                -
              </span>
              <span className="bg-specBeige text-xl font-semibold p-5">
                {formData.number}
              </span>
              <span
                className="bg-specBeige text-xl font-semibold p-5 rounded-r-full hover:text-specRed cursor-pointer"
                onClick={add}
              >
                +
              </span>
            </div>
            <div>
              <div className="text-specDimGrey bg-specBeige border-2 rounded-t-lg w-80 h-40 p-5">
                <h2 className="capitalize font-semibold text-lg">
                  sipariş toplamı
                </h2>
                <div className="flex justify-between pt-5 font-medium">
                  <span>Seçimler:</span>
                  <span>{priceValues.totalExtraPriceData}₺</span>
                </div>
                <div className="flex justify-between pt-5 font-semibold text-specRed">
                  <span>Toplam:</span>
                  <span>{`${
                    priceValues.totalPriceData + priceValues.totalExtraPriceData
                  }₺`}</span>
                </div>
              </div>
              <input
                type="submit"
                value="Sipariş ver"
                className="bg-specYellow text-specDimGrey text-lg font-barlow font-semibold mb-16 px-7 py-3 rounded-b-xl w-80 hover:bg-specDimGrey hover:text-specYellow duration-200 cursor-pointer"
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default OrderPageContent;
