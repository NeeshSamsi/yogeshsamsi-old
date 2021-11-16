// NEXT
import Link from "next/link";

// COMPONENTS
import Socials from "../Socials";
import TextInput from "../TextInput";

const Footer = () => {
  return (
    <footer className="w-full bg-cream flex justify-between flex-wrap py-10 px-col-all">
      <div className="bg-light p-6 rounded-xl border border-dark">
        <h4 className="text-2xl font-serif font-bold">Join our Mailing List</h4>
        {/* Material UI Name Input */}
        <TextInput label="Name" placeholder="Enter your Name" />
        <TextInput label="Email" placeholder="Enter your Email" />
        {/* Material UI Email Input */}
        {/* Material UI Submit Button */}
      </div>

      <div className="flex flex-col space-y-6">
        <h4 className="text-2xl font-serif font-bold">Find me here:</h4>
        <div className="flex space-x-4">
          <Socials />
        </div>
        <a className="underline text-lg" href="mailto:yogeshsamsiofficial@gmail.com">
          yogeshsamsiofficial@gmail.com
        </a>
      </div>

      <div className="flex flex-col space-y-4 underline text-lg">
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
