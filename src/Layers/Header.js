import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { dataHomePage } from "../Data";

const Header = () => {
  return (
    <header className="bg-specRed flex justify-center items-center py-8">
      <NavLink to="/">
        <img src={dataHomePage.header.img} />
      </NavLink>
    </header>
  );
};
export default Header;
