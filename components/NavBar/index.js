// NEXT
import Link from "next/link";
import Image from "next/image";

// Images / Icons
import Facebook from "../../assets/socials/facebook.svg";
import Instagram from "../../assets/socials/instagram.svg";
import YouTube from "../../assets/socials/youtube.svg";

const NavBar = ({ bg }) => {
  return (
    <nav className={`sticky top-0 left-0 bg-${bg} w-full text-light text-xl`}>
      <div className="max-w-[80%] mx-auto py-4 flex justify-between items-center">
        <div className="w-[50%] flex justify-between">
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

        <div className="w-[10%] flex justify-between items-center">
          <a href="https://fb.me/PanditYogeshSamsi">
            <div className="w-8 h-8">
              <Image
                src={Facebook}
                alt="Yogesh Samsi Facebook Page (Facebook Logo)"
                target="_blank"
                className="image"
              />
            </div>
          </a>
          <a href="https://instagram.com/yogesh.samsi">
            <div className="w-8 h-8">
              <Image
                src={Instagram}
                alt="Yogesh Samsi Instgram Account (Instagram Logo)"
                target="_blank"
                className="image"
              />
            </div>
          </a>
          <a href="https://youtube.com/YogeshSamsiOfficial">
            <div className="w-8 h-8">
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
