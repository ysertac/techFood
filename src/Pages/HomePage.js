import { dataHomePage } from "../Data";

const HomePage = () => {
  return (
    <>
      <section
        className={
          "bg-[url('/src/Assets/mvp-banner.png')] h-[100vh] flex flex-col items-center pt-20 text-center"
        }
      >
        <header>
          <img src={dataHomePage.header.img} />
        </header>
        <div className="flex flex-col mt-14 h-56 justify-between">
          <p className="text-specYellow font-satisfy text-2xl">
            fırsatı kaçırma
          </p>
          <p className="text-white text-5xl font-barlow font-light">
            KOD ACIKTIRIR
          </p>
          <p className="text-white text-5xl font-barlow font-light">
            PIZZA, DOYURUR
          </p>
          <a className="bg-specYellow px-10 py-4 mx-auto rounded-full w-1/2 font-medium hover:bg-specLightGrey hover:text-white duration-200">
            ACIKTIM
          </a>
        </div>
      </section>
      <section className="w-3/4 mx-auto flex justify-between">
        {dataHomePage.underBanner.map((item) => (
          <div className="flex items-center my-6">
            <img src={item.img} />
            <p className="pl-5 font-semibold">{item.name}</p>
          </div>
        ))}
      </section>
      <section className="bg-specBeige">
        <div className="w-3/4 flex mx-auto justify-between py-32">
          <div className="w-[49%] h-[600px] bg-[url('/src/Assets/adv-aseets/kart-1.png')] bg-cover rounded-3xl">
            <div className="text-white mt-10 ml-10 font-semibold flex flex-col h-[40%] justify-between">
              <p className="font-quattrocento text-6xl">Özel</p>
              <p className="font-quattrocento text-6xl">Lezzetus</p>
              <p className="text-lg">Position: Absolute Acı Burger</p>
              <a className="px-10 py-4 bg-white text-specRed font-bold w-[27%] text-center rounded-full hover:bg-specLightGrey hover:text-white duration-200">
                SİPARİŞ VER
              </a>
            </div>
          </div>
          <div className="w-[49%] flex flex-col justify-between">
            <div className="bg-[url('/src/Assets/adv-aseets/kart-2.png')] h-[48%] bg-cover rounded-2xl">
              <div className="text-white mt-10 ml-10 font-semibold flex flex-col h-3/5 justify-between">
                <p className="font-quattrocento text-4xl">Hackathlon</p>
                <p className="font-quattrocento text-4xl">Burger Menü</p>
                <a className="px-10 py-4 bg-white text-specRed font-bold w-[27%] text-center rounded-full hover:bg-specLightGrey hover:text-white duration-200">
                  SİPARİŞ VER
                </a>
              </div>
            </div>
            <div className="bg-[url('/src/Assets/adv-aseets/kart-3.png')] h-[48%] bg-cover rounded-2xl">
              <div className="text-black mt-10 ml-10 font-semibold flex flex-col h-3/5 justify-between">
                <p className="font-quattrocento text-4xl">
                  <span className="text-specRed">Çoooook</span> hızlı
                </p>
                <p className="font-quattrocento text-4xl">npm gibi kurye</p>
                <a className="px-10 py-4 bg-white text-specRed font-bold w-[27%] text-center rounded-full hover:bg-specLightGrey hover:text-white duration-200">
                  SİPARİŞ VER
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
