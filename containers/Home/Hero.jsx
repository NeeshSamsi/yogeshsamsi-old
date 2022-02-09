import Image from "next/image"

import HeroImage from "../../assets/home/hero.jpg"
import HeroImageMob from "../../assets/home/hero-mob.jpg"

const Hero = () => {
  return (
    <>
      <div className="w-screen">
        <Image
          src={HeroImage}
          alt="Background image of Pandit Yogesh Samsi"
          className="z-0 h-full w-full object-cover"
        />
      </div>
      <main className="relative px-col-main">
        {/* <div className="z-10">
        <h1 className="text-light font-serif font-bold text-7xl">Yogesh Samsi</h1>
        <div>
          <div>
            <a href=""></a>
          </div>
        </div>
      </div> */}
      </main>
    </>
  )
}

export default Hero
