import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataFooter } from "../Data";

const Footer = () => {
  return (
    <footer className="bg-specDimGrey">
      <div className="w-3/4 max-mobile:w-11/12 mx-auto flex max-mobile:flex-col justify-between">
        <div className="flex max-mobile:flex-col text-white w-1/3 justify-between max-mobile:w-full">
          <div className="pt-12 max-mobile:flex max-mobile:flex-col max-mobile:items-center">
            <div className="max-mobile:flex max-mobile:flex-row">
              <h2 className="text-4xl font-barlow font-bold">
                Teknolojik &nbsp;
              </h2>
              <h2 className="text-4xl font-barlow font-bold">Yemekler</h2>
            </div>
            {dataFooter.connection.map((item) => (
              <div className="flex items-center py-5">
                <img src={item.icon} />
                <p className="pl-5">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="pt-[4.5rem] max-mobile:text-center">
            <h2 className="text-2xl font-sans font-semibold">
              Sıcacık Menüler
            </h2>
            <p className="text-lg font-barlow py-[6px] pt-11">Terminal Pizza</p>
            <p className="text-lg font-barlow py-[6px]">
              5 Kişilik Hackathlon Pizza
            </p>
            <p className="text-lg font-barlow py-[6px]">
              useEffect Tevuklu Burger
            </p>
            <p className="text-lg font-barlow py-[6px]">Beyaz Console Frosty</p>
            <p className="text-lg font-barlow py-[6px]">Cypress Test Burger</p>
            <p className="text-lg font-barlow py-[6px]">
              Position Absolute Acı Pizza
            </p>
          </div>
        </div>
        <div className="w-[21.5%] pt-[4.5rem] max-mobile:w-full">
          <h2 className="text-white font-barlow font-semibold text-2xl max-mobile:text-center">
            Instagram
          </h2>
          <div className="flex flex-wrap justify-between">
            {dataFooter.instaImg.map((item) => (
              <img src={item} className="pt-3 max-mobile:w-[31%] rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t mt-10"></div>
      <div className="w-3/4 mx-auto pt-5 pb-7 flex justify-between items-center max-mobile:flex-col">
        <p className="text-white pt-5 max-mobile:pb-7 text-lg">
          &copy; 2023 tüm hakları saklıdır.
        </p>
        <div className="text-white w-1/12 flex justify-between text-[21px] max-mobile:w-full">
          {dataFooter.social.map((item) => (
            <a
              href={item.path}
              target="_blank"
              className="hover:text-specLightGrey duration-200 text-2xl"
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
