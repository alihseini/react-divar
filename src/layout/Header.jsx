import { Link } from "react-router";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex justify-between !px-4 shadow-md">
      <div className="flex gap-5">
        <Link to="/">
          <img src="../../public/divar.svg" className="w-20" />
        </Link>
        <div className="flex items-center">
          <img src="../../public/location.svg" />
          <p>تهران</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Link
          to="/profile"
          className="flex items-center w-20 rounded hover:cursor-pointer delay-50 ease-in"
        >
          <img src="../../public/profile.svg" />
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
