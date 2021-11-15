import Image from "next/image";

// Images / Icons
import Facebook from "../../assets/socials/facebook.svg";
import Instagram from "../../assets/socials/instagram.svg";
import YouTube from "../../assets/socials/youtube.svg";

const index = () => {
  return (
    <>
      <a href="https://fb.me/PanditYogeshSamsi">
        <div className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 ">
          <Image
            src={Facebook}
            alt="Yogesh Samsi Facebook Page (Facebook Logo)"
            target="_blank"
            className="image text-dark"
          />
        </div>
      </a>
      <a href="https://instagram.com/yogesh.samsi">
        <div className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8">
          <Image
            src={Instagram}
            alt="Yogesh Samsi Instgram Account (Instagram Logo)"
            target="_blank"
            className="image"
          />
        </div>
      </a>
      <a href="https://youtube.com/YogeshSamsiOfficial">
        <div className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8">
          <Image src={YouTube} alt="Yogesh Samsi YouTube Channel (YouTube Logo)" target="_blank" className="image" />
        </div>
      </a>
    </>
  );
};

export default index;
