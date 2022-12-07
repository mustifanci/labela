import { GiHamburgerMenu } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Search from "./Search";

function Header() {
  return (
    <div className="bg-slate-900 text-white px-3 py-4 h-min border-b-2 border-solid border-slate-700">
      <div className="flex justify-between items-center">
        <a href="/" className="text-xl font-bold tracking-wider cursor-pointer">
          ./LaBela
        </a>
        <div className="flex items-center gap-3">
          <a href="/">
            <GiHamburgerMenu />
          </a>
          <a href="/">
            <FaQuestion />
          </a>
          <a href="/">
            <IoMdSettings />
          </a>
        </div>
      </div>
      <Search placeholder="Search for apps..." />
    </div>
  );
}

export default Header;
