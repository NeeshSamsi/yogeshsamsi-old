// REACT
import { useState } from "react"

// NEXT
import Link from "next/link"

// COMPONENTS
import Socials from "../Socials"

const NavBar = ({ theme }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  const { background, foreground } = theme

  const handleHamburgerClick = ({}) => {
    setIsHamburgerOpen((prevHamburgerState) => !prevHamburgerState)
  }

  return (
    <nav
      className={`sticky top-0 left-0 bg-${background} w-full py-4 px-col-all md:py-6 text-${foreground}  z-50 lg:text-lg 2xl:text-xl`}
    >
      {/* inner nav container */}
      <div className=" flex items-center justify-between">
        {/* LEFT */}
        {/* desktop links */}
        <div className="hidden justify-between md:flex md:space-x-4 lg:space-x-6">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
          <Link href="/schedule">
            <a>Schedule</a>
          </Link>
          <Link href="/saathsangath">
            <a>SaathSangath</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>

        {/* mobile logo font */}
        <Link href="/">
          <a>
            <h1 className="block font-serif text-2xl font-bold md:hidden">
              Yogesh Samsi
            </h1>
          </a>
        </Link>

        {/* RIGHT */}
        {/* destop socials */}
        <div className="hidden items-center justify-between md:flex md:space-x-2 lg:space-x-4">
          <Socials background="none" foreground="#F4EDE1" />
        </div>

        {/* mobile hamburger */}
        <button onClick={handleHamburgerClick} className="md:hidden">
          <div
            className={`tham ${
              isHamburgerOpen ? "tham-active" : ""
            } display tham-e-squeeze  tham-w-6`}
          >
            <div className="tham-box">
              <div className={`tham-inner bg-${foreground}`} />
            </div>
          </div>
        </button>
      </div>

      {/* hamburger menu */}
      <div
        className={`${
          isHamburgerOpen ? "block" : "hidden"
        } mx-auto flex flex-col space-y-6 py-10 text-lg md:hidden`}
      >
        {/* mobile links */}
        <div className="flex flex-col space-y-6">
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
        {/* mobile socials */}
        <div className="flex space-x-4 md:hidden">
          <Socials background="none" foreground="#F4EDE1" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
