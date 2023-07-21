import { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { TbLanguageHiragana } from "react-icons/tb";
import Link from "next/link";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" inline-block w-15 ">
      <button
        onClick={toggleDropdown}
        className="inline-flex  mr-3 h-11 w-auto align-center  text-black  py-1 px-4 focus:outline-none"
      >
        <MdOutlineLanguage  className="m-1" />English
      </button>

      {isOpen && (
        <ul className="absolute mt-2 py-1 bg-white rounded-md shadow-lg">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:text-rose-400"
            >
             <LiaLanguageSolid className="m-1"/> English
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:text-rose-400"
            >
              <TbLanguageHiragana className="m-1"/>Hindi
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
