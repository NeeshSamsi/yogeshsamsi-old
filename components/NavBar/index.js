// NEXT
import Link from "next/link";
import Image from "next/image";

// Images / Icons
import Facebook from "../../assets/socials/facebook.svg";
import Instagram from "../../assets/socials/instagram.svg";
import YouTube from "../../assets/socials/youtube.svg";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";

const NavBar = ({ bg }) => {
  return (
    <>
      <FullNav bg={bg} />

      <HamburgerNav bg={bg} />
    </>
  );
};

const FullNav = ({ bg }) => (
  <nav className={`sticky top-0 left-0 bg-dark-30 w-full text-light 2xl:text-xl xl:text-lg lg:text-lg lgmax:hidden`}>
    <div className="max-w-[80%] mx-auto py-4 flex justify-between items-center">
      <div className="w-[60%] flex justify-between">
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

      <div className="xl:w-[10%] lg:w-[12%] flex justify-between items-center">
        <a href="https://fb.me/PanditYogeshSamsi">
          <div className="w-8 h-8 lg:w-7 lg:h7">
            <Image src={Facebook} alt="Yogesh Samsi Facebook Page (Facebook Logo)" target="_blank" className="image" />
          </div>
        </a>
        <a href="https://instagram.com/yogesh.samsi">
          <div className="w-8 h-8 lg:w-7 lg:h7">
            <Image
              src={Instagram}
              alt="Yogesh Samsi Instgram Account (Instagram Logo)"
              target="_blank"
              className="image"
            />
          </div>
        </a>
        <a href="https://youtube.com/YogeshSamsiOfficial">
          <div className="w-8 h-8 lg:w-7 lg:h7">
            <Image src={YouTube} alt="Yogesh Samsi YouTube Channel (YouTube Logo)" target="_blank" className="image" />
          </div>
        </a>
      </div>
    </div>
  </nav>
);

const HamburgerNav = ({ bg }) => (
  <nav className="lg:hidden flex justify-between">
    <h1>Yogesh Samsi</h1>
    <XIcon />
    <MenuAlt3Icon />
  </nav>
);

export default NavBar;
