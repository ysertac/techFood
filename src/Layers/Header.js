import { Link } from "react-router-dom";
import { dataHomePage } from "../Data";
const lsKeyUsername = "username";
const lsKeyPassword = "password";

const Header = () => {
  return (
    <header className="bg-specRed flex flex-col justify-center items-center py-8">
      <Link to="/">
        <img
          src={dataHomePage.header.img}
          className="max-mobile:w-4/5 mx-auto"
        />
      </Link>
      {localStorage.getItem(lsKeyUsername) != null ? (
        <div className="flex justify-between w-1/12 max-mobile:w-3/5">
          <p className="text-white text-lg">
            {"Welcome " + localStorage.getItem(lsKeyUsername)}
          </p>
          <p
            className="text-white text-lg hover:text-specYellow cursor-pointer duration-300"
            onClick={() => (
              localStorage.removeItem(lsKeyUsername),
              localStorage.removeItem(lsKeyPassword),
              window.location.reload()
            )}
          >
            Log out
          </p>
        </div>
      ) : (
        <div className="flex justify-between w-1/12 max-mobile:w-1/3">
          <Link to="/login">
            <div className="text-white">Log in</div>
          </Link>
          <Link to="/signup">
            <div className="text-white">Sign up</div>
          </Link>
        </div>
      )}
    </header>
  );
};
export default Header;
