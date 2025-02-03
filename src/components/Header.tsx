import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed left-1/2 top-4 transform -translate-x-1/2 w-[90%] max-w-4xl z-50">
      <header className="flex items-center gap-x-4 px-6 py-3 bg-white/20 backdrop-blur-lg border-white/30 shadow-lg rounded-2xl">
        <FontAwesomeIcon className="text-gray-300 text-2xl" icon={faMessage} />
        <h1 className="text-gray-200 text-2xl font-semibold mx-auto">BB</h1>
        <Hamburger rounded size={25} color="whitesmoke" toggled={isOpen} toggle={setIsOpen} />
      </header>
    </div>
  );
};

export default Header;
