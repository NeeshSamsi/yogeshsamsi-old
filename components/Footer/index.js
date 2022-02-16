// NEXT
import Link from "next/link"

// COMPONENTS
import MailingList from "./Mailing List"
import Socials from "../Socials"

const Footer = () => {
  return (
    <footer className="flex w-full flex-col justify-between space-y-10 bg-light py-10 px-col-all lg:flex-row lg:-space-y-0">
      <MailingList />

      <div className="flex flex-col space-y-6">
        <h4 className="font-serif text-xl font-bold lg:text-2xl">
          Find me here:
        </h4>
        <div className="flex space-x-4">
          <Socials background="none" foreground="#222222" />
        </div>
        <a
          className="text-base underline lg:text-lg"
          href="mailto:yogeshsamsiofficial@gmail.com"
        >
          yogeshsamsiofficial@gmail.com
        </a>
      </div>

      <div className="flex flex-col space-y-4 text-base underline lg:text-lg">
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
  )
}

export default Footer
