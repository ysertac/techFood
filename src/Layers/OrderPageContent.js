import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { dataHomePage, dataOrderPage } from "../Data";

const OrderPageContent = () => {
  const { id } = useParams();
  const item = dataHomePage.menuCards.find((item) => item.id == id);
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
    </>
  );
};
export default OrderPageContent;
