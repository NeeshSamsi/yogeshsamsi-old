// REACT
import { useState } from "react";

// NEXT
import Link from "next/link";
import Image from "next/image";

// Images / Icons
import Facebook from "../../assets/socials/facebook.svg";
import Instagram from "../../assets/socials/instagram.svg";
import YouTube from "../../assets/socials/youtube.svg";

const NavBar = ({ bg }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen((prevHamburgerState) => !prevHamburgerState);
  };

  return (
    <nav className={`fixed top-0 left-0 ${bg} w-full py-2 md:py-4 text-light  lg:text-lg 2xl:text-xl`}>
      {/* main nav container */}
      {/* mobile mw-90%, 90% | desktop mw-80%, {TBD} */}
      <div className="max-w-[80%] mx-auto flex justify-between items-center">
        {/* LEFT */}
        {/* desktop links */}
        <div className="hidden md:flex justify-between md:space-x-4 lg:space-x-6">
          <Link href="/">
            <a> Home</a>
          </Link>
          <Link href="/">
            <a> About</a>
          </Link>
          <Link href="/">
            <a> Gallery</a>
          </Link>
          <Link href="/">
            <a> Schedule</a>
          </Link>
          <Link href="/">
            <a> SaathSangath</a>
          </Link>
          <Link href="/">
            <a> Contact</a>
          </Link>
        </div>
        {/* mobile logo font */}
        <Link href="/">
          <a>
            <h1 className="block md:hidden font-serif font-bold text-xl">Yogesh Samsi</h1>
          </a>
        </Link>

        {/* LEFT */}
        {/* destop socials */}
        <div className="hidden md:flex justify-between items-center md:space-x-2 lg:space-x-4">
          <a href="https://fb.me/PanditYogeshSamsi">
            <div className="w-8 h-8 md:w-6 md:h-6 lg:w-7 lg:h-7">
              <Image
                src={Facebook}
                alt="Yogesh Samsi Facebook Page (Facebook Logo)"
                target="_blank"
                className="image"
              />
            </div>
          </a>
          <a href="https://instagram.com/yogesh.samsi">
            <div className="w-8 h-8 md:w-6 md:h-6 lg:w-7 lg:h-7">
              <Image
                src={Instagram}
                alt="Yogesh Samsi Instgram Account (Instagram Logo)"
                target="_blank"
                className="image"
              />
            </div>
          </a>
          <a href="https://youtube.com/YogeshSamsiOfficial">
            <div className="w-8 h-8 md:w-6 md:h-6 lg:w-7 lg:h-7">
              <Image
                src={YouTube}
                alt="Yogesh Samsi YouTube Channel (YouTube Logo)"
                target="_blank"
                className="image"
              />
            </div>
          </a>
        </div>
        {/* mobile hamburger */}
        {/* {isHamburgerOpen ? (
          <XIcon className="block md:hidden w-8 h-8" />
        ) : (
          <MenuIcon className="block md:hidden w-8 h-8" />
        )} */}

        <button onClick={handleHamburgerClick}>
          <div
            className={`tham ${isHamburgerOpen ? "tham-active" : ""} tham-e-squeeze display md:hidden tham-w-6
          8`}
          >
            <div className="tham-box">
              <div className="tham-inner bg-light" />
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
