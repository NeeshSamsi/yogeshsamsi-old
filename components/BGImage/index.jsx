import Image from "next/image"
import { useState, useEffect } from "react"

const BGImage = ({ breakpoint, desktopSrc, mobileSrc }) => {
  const [width, setWidth] = useState(1025)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })

    return () =>
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth)
      })
  }, [])

  if (width && width >= breakpoint)
    return (
      <div className="relative h-screen w-full">
        <Image
          src={desktopSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background image of Pandit Yogesh Samsi"
          className="absolute z-0 hidden"
        />
      </div>
    )

  if (width && width < breakpoint) {
    return (
      <div className="relative h-screen w-full">
        <Image
          src={mobileSrc}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background image of Pandit Yogesh Samsi"
          className="absolute z-0 block lg:hidden"
        />
      </div>
    )
  }

  return null
}

export default BGImage
