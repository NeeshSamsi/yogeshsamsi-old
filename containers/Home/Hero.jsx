import dynamic from "next/dynamic"

import RightArrow from "../../components/Icons/RightArrow"
import Chat from "../../components/Icons/Chat"
// import BGImage from "../../components/BGImage"
const BGImage = dynamic(() => import("../../components/BGImage"), {
  ssr: false,
})

const Hero = () => {
  return (
    <div className="relative">
      <BGImage
        breakpoint={1024}
        desktopSrc="/img/home/hero.jpg"
        mobileSrc="/img/home/hero-mobile.jpg"
      />
      <main className="absolute top-0 left-0 mx-auto h-screen w-full lg:mx-0 lg:flex lg:items-center lg:px-col-main">
        <div className="mx-auto mt-16 flex max-w-2xl flex-col space-y-10 xs:space-y-10 sm:space-y-12 md:space-y-14 lg:mx-0 lg:mt-0 lg:space-y-20">
          <h1 className="text-center font-serif text-5xl font-bold text-light md:text-7xl lg:text-left 2xl:text-8xl">
            Yogesh Samsi
          </h1>
          <div className="flex w-full flex-col items-center justify-center xs:space-x-2 sm:flex-row sm:space-x-6 lg:justify-start xl:text-xl 2xl:text-2xl">
            <button className="flex items-center space-x-4 rounded-md bg-light p-4 text-sm font-semibold uppercase text-darker xs:p-2 sm:p-2 md:p-3 lg:p-4 lg:text-base xl:p-4 2xl:p-5">
              <span>Upcoming Events</span>
              <RightArrow foreground="#362009" />
            </button>
            <button className="flex items-center space-x-4 rounded-md p-4 font-semibold uppercase text-light">
              <span>Contact</span>
              <Chat foreground="#E0B385" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
