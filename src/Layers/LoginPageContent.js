import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const LoginPageContent = () => {
  const history = useHistory();
  const [status, setstatus] = useState(0);
  const lsKeyUsername = "username";
  const lsKeyPassword = "password";
  const loginFormDataInit = {
    username: "",
    password: "",
  };
  const [formDataLogin, setFormDataLogin] = useState(loginFormDataInit);
  const changeHandlerLogin = (e) => {
    let { name, value } = e.target;
    setFormDataLogin({ ...formDataLogin, [name]: value });
  };
  const submitHandlerLogin = (e) => {
    e.preventDefault();
    axios
      .get("https://techfood.up.railway.app/techfood/welcome", {
        auth: {
          username: formDataLogin.username,
          password: formDataLogin.password,
        },
      })
      .then((res) => setstatus(res.status))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (status == 200) {
      localStorage.setItem(lsKeyUsername, formDataLogin.username);
      localStorage.setItem(lsKeyPassword, formDataLogin.password);
      history.push("/admin");
    }
  }, [status]);
  console.log(formDataLogin);
  return (
    <>
      <form className="" onSubmit={submitHandlerLogin}>
        <div className="w-1/5 max-mobile:w-11/12 h-[31.5016vh] flex flex-col mx-auto justify-around">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            <p>Username</p>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="username"
                id="username"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="username"
                onChange={changeHandlerLogin}
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
                onChange={changeHandlerLogin}
              />
            </div>
          </label>
          <input
            type="submit"
            className="bg-specLightGrey text-white hover:bg-specBeige hover:text-specLightGrey duration-300 mx-auto py-1.5 rounded-xl w-1/3 cursor-pointer"
            value={"GİRİŞ"}
          />
        </div>
      </form>
    </>
  );
};
export default LoginPageContent;
