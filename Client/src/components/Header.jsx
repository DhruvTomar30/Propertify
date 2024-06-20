import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2.5">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Pro</span>
            <span className="text-slate-700">Pertify</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-1.5 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slay-600 cursor-pointer" />
        </form>
        <ul className="flex gap-6">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 pr-1 transition duration-300 ease-in-out hover:text-slate-900">
              Home
            </li>
          </Link>
          <Link to="about">
            <li className="hidden sm:inline text-slate-700 pr-1 transition duration-300 ease-in-out hover:text-slate-900">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="profile"
                className="w-7 h-7 rounded-full"
              />
            ) : (
              <li className="text-slate-700  transition duration-300 ease-in-out hover:text-slate-900">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
