// REACT
import { useState } from "react";

// NEXT
import Link from "next/link";
import Image from "next/image";

// Images / Icons
import Facebook from "../../assets/socials/facebook.svg";
import Instagram from "../../assets/socials/instagram.svg";
import YouTube from "../../assets/socials/youtube.svg";

const NavBar = ({ theme }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const { background, foreground } = theme;

  const handleHamburgerClick = ({}) => {
    setIsHamburgerOpen((prevHamburgerState) => !prevHamburgerState);
  };

  return (
    <nav
      className={`sticky top-0 left-0 bg-${background} w-full py-4 px-[10%] md:py-6 text-${foreground}  lg:text-lg 2xl:text-xl`}
    >
      {/* inner nav container */}
      <div className="mx-auto flex justify-between items-center">
        {/* LEFT */}
        {/* desktop links */}
        <div className="hidden md:flex justify-between md:space-x-4 lg:space-x-6">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
          <Link href="/schedule">
            <a>Schedule</a>
          </Link>
          <Link href="/saathsangath">
            <a>SaathSangath</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>

        {/* mobile logo font */}
        <Link href="/">
          <a>
            <h1 className="block md:hidden font-serif font-bold text-2xl">Yogesh Samsi</h1>
          </a>
        </Link>

        {/* RIGHT */}
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
        <button onClick={handleHamburgerClick}>
          <div className={`tham ${isHamburgerOpen ? "tham-active" : ""} tham-e-squeeze display md:hidden tham-w-6`}>
            <div className="tham-box">
              <div className={`tham-inner bg-${foreground}`} />
            </div>
          </div>
        </button>
      </div>

      {/* hamburger menu */}
      <div
        className={`${isHamburgerOpen ? "block" : "hidden"} md:hidden mx-auto py-10 flex flex-col space-y-6 text-lg`}
      >
        {/* mobile links */}
        <div className="flex flex-col space-y-6">
          <Link href="/">
            <a className="block">Home</a>
          </Link>
          <Link href="/">
            <a className="block">About</a>
          </Link>
          <Link href="/">
            <a className="block">Gallery</a>
          </Link>
          <Link href="/">
            <a className="block">Schedule</a>
          </Link>
          <Link href="/">
            <a className="block">SaathSangath</a>
          </Link>
          <Link href="/">
            <a className="block">Contact</a>
          </Link>
        </div>
        {/* mobile socials */}
        <div className="flex md:hidden space-x-4">
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
      </div>
    </nav>
  );
};

export default NavBar;
