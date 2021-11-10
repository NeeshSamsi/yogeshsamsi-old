// NEXT
import Image from "next/image";

// Images / Icons
import Facebook from "../../assets/socials/facebook.svg";
import Instagram from "../../assets/socials/instagram.svg";
import YouTube from "../../assets/socials/youtube.svg";

const NavBar = () => {
  return (
    <nav className="">
      <ul className="">
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Schedule</li>
        <li>SaathSangath</li>
        <li>Contact</li>
      </ul>
      <ul>
        <a href="https://fb.me/PanditYogeshSamsi">
          <Image src={Facebook} alt="Yogesh Samsi Facebook Page (Facebook Logo)" target="_blank" />
        </a>
        <a href="https://instagram.com/yogesh.samsi">
          <Image src={Instagram} alt="Yogesh Samsi Instgram Account (Instagram Logo)" target="_blank" />
        </a>
        <a href="https://youtube.com/YogeshSamsiOfficial">
          <Image src={YouTube} alt="Yogesh Samsi YouTube Channel (YouTube Logo)" target="_blank" />
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
