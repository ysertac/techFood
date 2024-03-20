import axios from "axios";
import { useState } from "react";
import Header from "../Layers/Header";
import Footer from "../Layers/Footer";
import { ToastContainer, toast } from "react-toastify";

const Work = () => {
  const [products, setProducts] = useState([]);
  const lsKeyUsername = "username";
  const lsKeyPassword = "password";
  const productFormDataInit = {
    name: "",
    image: "",
    description: "",
    price: 0,
    point: 0,
    dailyOrder: 0,
  };
  const extraFormDataInit = {
    name: "",
    price: 0,
  };

  const [productFormData, setProductFormData] = useState(productFormDataInit);
  const [extraFormData, setExtraFormData] = useState(extraFormDataInit);

  const changeHandlerProduct = (e) => {
    let { name, value } = e.target;
    setProductFormData({ ...productFormData, [name]: value });
  };
  const changeHandlerExtra = (e) => {
    let { name, value } = e.target;
    setExtraFormData({ ...extraFormData, [name]: value });
  };

  const submitHandlerProduct = (e) => {
    e.preventDefault();
    axios
      .post("https://techfood.up.railway.app/techfood/food", productFormData, {
        auth: {
          username: localStorage.getItem(lsKeyUsername),
          password: localStorage.getItem(lsKeyPassword),
        },
      })
      .then((res) => console.log(res.data))
      .then(setProductFormData(productFormDataInit))
      .then(() => toast("Ürün ekleme başarılı."))
      .catch(() => toast("Ürün eklenemedi tekrar deneyin."));
  };

  const submitHandlerExtra = (e) => {
    e.preventDefault();
    axios
      .post("https://techfood.up.railway.app/techfood/extra", extraFormData, {
        auth: {
          username: localStorage.getItem(lsKeyUsername),
          password: localStorage.getItem(lsKeyPassword),
        },
      })
      .then((res) => console.log(res.data))
      .then(setExtraFormData(extraFormDataInit))
      .then(() => toast("İçerik ekleme başarılı."))
      .catch(() => toast("İçerik eklenemedi tekrar deneyin."));
  };

  console.log(productFormData);
  return (
    <>
      <Header />
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex w-3/4 max-mobile:w-11/12 mx-auto justify-between items-center h-[800px] max-mobile:h-[1400px] max-mobile:flex-col max-mobile:justify-evenly">
        <form
          onSubmit={submitHandlerProduct}
          className="w-3/4 h-5/6 max-mobile:h-2/3 max-mobile:w-full flex flex-col justify-between max-mobile:justify-evenly items-start"
        >
          <h2 className="uppercase text-2xl font-bold font-barlow mobile:self-start text-center w-3/5 max-mobile:w-full">
            ürün ekleme
          </h2>
          <label className="text-xl font-bold text-right max-mobile:text-left max-mobile:w-full capitalize flex flex-col items-center w-3/5">
            <p className="text-left"> product name</p>
            <input
              onChange={changeHandlerProduct}
              type="text"
              name="name"
              className="border-2 mt-5 bg-specBeige focus:bg-specYellow pl-3 h-12 w-full"
              value={productFormData.name}
            />
          </label>
          <label className="text-xl font-bold text-right max-mobile:text-left max-mobile:w-full capitalize flex flex-col items-center w-3/5">
            <p className="text-left">Image URL</p>
            <input
              onChange={changeHandlerProduct}
              type="text"
              name="image"
              className="border-2 mt-5 bg-specBeige focus:bg-specYellow pl-3 h-12 w-full"
              value={productFormData.image}
            />
          </label>
          <label className="text-xl font-bold text-right max-mobile:text-left max-mobile:w-full capitalize flex flex-col items-center w-3/5">
            <p className="text-left">description</p>
            <textarea
              onChange={changeHandlerProduct}
              name="description"
              className="border-2 mt-5 bg-specBeige focus:bg-specYellow pt-3 pl-3 h-36 w-full"
              value={productFormData.description}
            ></textarea>
          </label>
          <label className="text-xl font-bold text-right max-mobile:text-left max-mobile:w-full capitalize flex flex-col items-center w-3/5">
            <p className="text-left">price</p>
            <input
              onChange={changeHandlerProduct}
              type="number"
              name="price"
              className="border-2 mt-5 bg-specBeige focus:bg-specYellow pl-3 h-12 w-full"
              value={productFormData.price}
            />
          </label>
          <input
            type="submit"
            value={"ekle"}
            className="bg-specYellow w-1/5 py-2 rounded-xl max-mobile:w-full cursor-pointer text-specDimGrey text-md font-semibold uppercase"
          />
        </form>
        <form
          onSubmit={submitHandlerExtra}
          className="w-3/4 h-3/5 max-mobile:h-1/3 flex flex-col justify-between items-end max-mobile:w-full max-mobile:justify-evenly"
        >
          <h2 className="uppercase text-2xl font-bold font-barlow mobile:self-end text-center w-3/5 max-mobile:w-full">
            ekstra içerik ekleme
          </h2>
          <label className="text-xl font-bold text-right max-mobile:text-left capitalize flex flex-col items-center w-3/5 max-mobile:w-full">
            <p className="text-left"> content name</p>
            <input
              onChange={changeHandlerExtra}
              type="text"
              name="name"
              className="border-2 mt-5 bg-specBeige focus:bg-specYellow pl-3 h-12 w-full"
              value={extraFormData.name}
            />
          </label>
          <label className="text-xl font-bold text-right max-mobile:text-left capitalize flex flex-col items-center w-3/5 max-mobile:w-full">
            <p className="text-left">price</p>
            <input
              onChange={changeHandlerExtra}
              type="number"
              name="price"
              className="border-2 mt-5 bg-specBeige focus:bg-specYellow pl-3 h-12 w-full"
              value={extraFormData.price}
            />
          </label>
          <input
            type="submit"
            value={"ekle"}
            className="bg-specYellow w-1/5 py-2 rounded-xl cursor-pointer text-specDimGrey text-md font-semibold uppercase max-mobile:w-full"
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Work;
