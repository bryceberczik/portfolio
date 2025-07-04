import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../public/picsvg_download.svg";

const Footer = () => {
  return (
    <footer className="text-white mt-[50px] py-6">
      <div className="container mx-auto flex flex-col justify-between items-center px-4">
        <img src={logo} width={80} alt="bryce berczik logo" />
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bryce Berczik. All Rights
            Reserved.
          </p>
          <a
            href="https://github.com/bryceberczik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[whitesmoke] hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/bryce-berczik-9b4874323/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[whitesmoke] hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
