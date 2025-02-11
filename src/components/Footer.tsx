import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-white mt-[50px] py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://github.com/bryceberczik" target="_blank" rel="noopener noreferrer" className="text-[whitesmoke] hover:text-gray-400">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/bryce-berczik-9b4874323/" target="_blank" rel="noopener noreferrer" className="text-[whitesmoke] hover:text-gray-400">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                <p className="text-sm mt-5">&copy; {new Date().getFullYear()} Bryce Berczik. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
