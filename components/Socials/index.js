// Images / Icons
import Facebook from "./Facebook"
import Instagram from "./Instagram"
import YouTube from "./YouTube"

const index = ({ background, foreground }) => {
  return (
    <>
      <a href="https://fb.me/PanditYogeshSamsi">
        <div className="h-8 w-8 md:h-6 md:w-6 lg:h-8 lg:w-8 ">
          <Facebook background={background} foreground={foreground} />
        </div>
      </a>
      <a href="https://instagram.com/yogesh.samsi">
        <div className="h-8 w-8 md:h-6 md:w-6 lg:h-8 lg:w-8">
          <Instagram background={background} foreground={foreground} />
        </div>
      </a>
      <a href="https://youtube.com/YogeshSamsiOfficial">
        <div className="h-8 w-8 md:h-6 md:w-6 lg:h-8 lg:w-8">
          <YouTube background={background} foreground={foreground} />
        </div>
      </a>
    </>
  )
}

export default index
