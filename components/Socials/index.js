// Images / Icons
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import YouTube from "./YouTube";

const index = ({ background, foreground }) => {
  return (
    <>
      <a href="https://fb.me/PanditYogeshSamsi">
        <div className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 ">
          <Facebook background={background} foreground={foreground} />
        </div>
      </a>
      <a href="https://instagram.com/yogesh.samsi">
        <div className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8">
          <Instagram background={background} foreground={foreground} />
        </div>
      </a>
      <a href="https://youtube.com/YogeshSamsiOfficial">
        <div className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8">
          <YouTube background={background} foreground={foreground} />
        </div>
      </a>
    </>
  );
};

export default index;
