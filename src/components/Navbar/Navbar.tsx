import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useEffect, useRef } from "react";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className="w-full px-[6%] py-5 flex justify-between items-center fixed text-sm text-[#e5e5e5] bg-gradient-to-b from-black/70 via-black/0 to-transparent z-10"
    >
      <div className="flex items-center gap-4 md:gap-[50px]">
        <img src={logo} alt="Netflix" className="w-20 h-10" />
        <ul className="hidden md:flex gap-6 lg:gap-10 cursor-pointer">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li className="hidden lg:block">Browse by Languages</li>
        </ul>
      </div>
      <div className="flex items-center gap-3 md:gap-5 text-xs md:text-sm">
        <img src={search_icon} alt="Search" className="w-4 md:w-5 cursor-pointer" />
        <p className="hidden sm:block">Children</p>
        <img src={bell_icon} alt="Bell" className="w-4 md:w-5 cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer relative group">
          <img src={profile_icon} alt="Profile" className="rounded w-6 md:w-8 h-6 md:h-8" />
          <img src={caret_icon} alt="Caret" className="w-3" />
          <div className="absolute top-full right-0 w-max bg-[#191919] px-4 py-3 rounded-sm underline z-10 hidden group-hover:block">
            <p onClick={() => logout()} className="text-[13px] cursor-pointer">
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
