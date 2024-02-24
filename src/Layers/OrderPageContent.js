import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { dataHomePage, dataOrderPage } from "../Data";
import { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown";

const OrderPageContent = () => {
  const { id } = useParams();
  const item = dataHomePage.menuCards.find((item) => item.id == id);
  const size = document.getElementById("size");
  const formDataInitial = {
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
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
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
        <form className="w-3/4 mx-auto">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold">
                Boyut Seç <span className="text-specRed">*</span>
              </h2>
              <div className="mt-5 flex">
                {dataOrderPage.orderForm.size.map((size) => (
                  <div className="relative checked:bg-specYellow mr-5">
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
                      className={`border-2 w-10 h-10 rounded-full flex justify-center items-center specialClass bg-specBeige`}
                    >
                      <img src={size.icon} className="w-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/6">
              <h2 className="text-xl font-bold">
                Hamur Seç <span className="text-specRed">*</span>
              </h2>
              <Dropdown
                items={dataOrderPage.orderForm.thickness}
                changeHandler={changeHandler}
                menuBarText={menuBarText}
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default OrderPageContent;
