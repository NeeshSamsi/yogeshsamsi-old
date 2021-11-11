// NEXT
import Link from "next/link";
import Image from "next/image";

// Images / Icons
import Facebook from "../../assets/socials/facebook.svg";
import Instagram from "../../assets/socials/instagram.svg";
import YouTube from "../../assets/socials/youtube.svg";

const NavBar = ({ bg }) => {
  return (
    <nav className={`bg-${bg} w-full`}>
      <div className="max-w-[80%] mx-auto flex justify-between">
        <div>
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
        <div>
          <a href="https://fb.me/PanditYogeshSamsi">
            <Image src={Facebook} alt="Yogesh Samsi Facebook Page (Facebook Logo)" target="_blank" className="image" />
          </a>
          <a href="https://instagram.com/yogesh.samsi">
            <Image
              src={Instagram}
              alt="Yogesh Samsi Instgram Account (Instagram Logo)"
              target="_blank"
              className="image"
            />
          </a>
          <a href="https://youtube.com/YogeshSamsiOfficial">
            <Image src={YouTube} alt="Yogesh Samsi YouTube Channel (YouTube Logo)" target="_blank" className="image" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
