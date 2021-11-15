// NEXT
import Link from "next/link";
import Image from "next/image";

// Images / Icons
import Facebook from "../../assets/socials/facebook.svg";
import Instagram from "../../assets/socials/instagram.svg";
import YouTube from "../../assets/socials/youtube.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-cream flex justify-between flex-wrap py-4 px-col-all">
      <div className="bg-light">
        <h4>Join our Mailing List</h4>
        {/* Material UI Name Input */}
        {/* Material UI Email Input */}
        {/* Material UI Submit Button */}
      </div>

      <div>
        <h4>Find me here:</h4>
        <div>
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
        <a href="mailto:yogeshsamsiofficial@gmail.com">yogeshsamsiofficial@gmail.com</a>
      </div>

      <div className="flex flex-col space-y-4">
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
    </footer>
  );
};

export default Footer;
