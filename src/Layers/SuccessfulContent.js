import { useContext, useEffect, useState } from "react";
import { Context } from "../App";

const SuccessfulContent = () => {
  const { values, priceValues } = useContext(Context);
  return (
    <>
      <section className="bg-specRed">
        <div className="w-1/4 mx-auto text-center border-b-2 text-white py-5">
          <p className="font-satisfy text-specYellow text-2xl font-medium">
            lezzetin yolda
          </p>
          <h2 className="font-barlow text-5xl font-light uppercase py-2">
            sİpariş alındı
          </h2>
        </div>
      </section>
      <section className="bg-specRed pb-28">
        <div className="w-2/3 mx-auto pt-5 flex flex-col justify-between items-center h-[570px]">
          <h2 className="capitalize text-white text-lg font-semibold">
            {values.orderData?.order}
          </h2>
          <div className="text-white text-md flex flex-col h-2/5 w-[500px] justify-between items-left">
            <div className="">
              <span className="font-light">Boyut: </span>
              <span>{values.orderData?.size}</span>
            </div>
            <div>
              <span className="font-light">Hamur: </span>
              <span>{values.orderData?.thickness}</span>
            </div>
            <div>
              <span className="font-light">Ek Malzemeler: </span>
              <span className="">
                {values.orderData?.extra.map((item) => `${item} `)}
              </span>
            </div>
            <div>
              <span className="font-light">Sipariş Notu: </span>
              <span>{values.orderData?.note}</span>
            </div>
          </div>
          <div className="text-white border-2 rounded-lg w-80 h-40 p-5">
            <h2 className="capitalize">sipariş toplamı</h2>
            <div className="flex justify-between pt-5">
              <span>Seçimler:</span>
              <span>{priceValues.extraPriceData}₺</span>
            </div>
            <div className="flex justify-between pt-5">
              <span>Toplam:</span>
              <span>{priceValues.priceData + priceValues.extraPriceData}₺</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessfulContent;
