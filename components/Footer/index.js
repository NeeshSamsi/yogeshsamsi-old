// NEXT
import Link from "next/link";

// COMPONENTS
import MailingList from "./Mailing List";
import Socials from "../Socials";

const Footer = () => {
  return (
    <footer className="w-full bg-cream flex flex-col lg:flex-row justify-between space-y-10 lg:-space-y-0 py-10 px-col-all">
      <MailingList />
      <div className="flex flex-col space-y-6">
        <h4 className="text-xl lg:text-2xl font-serif font-bold">Find me here:</h4>
        <div className="flex space-x-4">
          <Socials background="none" foreground="#222222" />
        </div>
        <a className="underline text-base lg:text-lg" href="mailto:yogeshsamsiofficial@gmail.com">
          yogeshsamsiofficial@gmail.com
        </a>
      </div>

      <div className="flex flex-col space-y-4 underline text-base lg:text-lg">
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
