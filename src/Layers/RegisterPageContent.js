import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const RegisterPageContent = () => {
  const history = useHistory();
  const [status, setstatus] = useState(0);
  const [passwordValidation, setPasswordValidation] = useState("");
  const [passwordValidationError, setPasswordValidationError] = useState("");
  const lsKeyUsername = "username";
  const lsKeyPassword = "password";
  const registerFormDataInit = {
    username: "",
    password: "",
  };
  const [formDataRegister, setFormDataRegister] =
    useState(registerFormDataInit);
  const changeHandlerRegister = (e) => {
    let { name, value } = e.target;
    if (name == "username" || name == "password") {
      setFormDataRegister({ ...formDataRegister, [name]: value });
    } else {
      setPasswordValidation(value);
    }
  };
  const submitHandlerRegister = (e) => {
    e.preventDefault();
    if (formDataRegister.password == passwordValidation) {
      axios
        .post(
          "https://techfood.up.railway.app/techfood/auth/register",
          formDataRegister
        )
        .then((res) => setstatus(res.status))
        .catch((err) => console.log(err));
    } else {
      setPasswordValidationError("Passwords does not match");
    }
  };

  useEffect(() => {
    if (status == 200) {
      localStorage.setItem(lsKeyUsername, formDataRegister.username);
      localStorage.setItem(lsKeyPassword, formDataRegister.password);
      history.push("/");
    }
  }, [status]);
  console.log(formDataRegister);
  console.log(passwordValidation);
  return (
    <>
      <form className="" onSubmit={submitHandlerRegister}>
        <div className="w-1/5 max-mobile:w-11/12 h-[45vh] flex flex-col mx-auto justify-around">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            <p>Username</p>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="username"
                id="username"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="username"
                onChange={changeHandlerRegister}
              />
            </div>
          </label>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            <p>Password</p>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="password"
                onChange={changeHandlerRegister}
              />
            </div>
          </label>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            <p>Password Again</p>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="password2"
                id="password2"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="password again"
                onChange={changeHandlerRegister}
              />
            </div>
          </label>
          <p className="text-lg text-specRed font-bold text-center">
            {passwordValidationError}
          </p>
          <input
            type="submit"
            className="bg-specLightGrey text-white hover:bg-specBeige hover:text-specLightGrey duration-300 mx-auto py-1.5 rounded-xl w-1/3 cursor-pointer"
            value={"KAYIT"}
          />
        </div>
      </form>
    </>
  );
};
export default RegisterPageContent;
