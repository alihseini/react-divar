import { Link, useNavigate } from "react-router";
import { deleteCookie } from "../utils/cookie";

function Header() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between !px-4 shadow-md">
      <div className="flex gap-5">
        <Link to="/">
          <img src="/divar.svg" className="w-20" />
        </Link>
        <div className="flex items-center">
          <img src="/location.svg" />
          <p>تهران</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button
          onClick={logoutHandler}
          className="text-red-600 border border-red-600 rounded hover:cursor-pointer !px-2 !py-1 hover:bg-red-100"
        >
          خروج
        </button>
        <Link
          to="/profile"
          className="flex items-center w-20 rounded hover:cursor-pointer delay-50 ease-in"
        >
          <img src="/profile.svg" />
          <p>دیوار من</p>
        </Link>

        <Link
          to="/dashboard"
          className="flex items-center w-20 h-10 bg-red-600 !text-white !p-2 rounded hover:bg-red-300 hover:cursor-pointer delay-50 ease-in"
        >
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
