import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" inline-block w-15 ">
      <button
        onClick={toggleDropdown}
        className="inline-flex  mr-3 h-11 w-auto align-center border-rose-400  text-black border-2 py-1 px-4 focus:outline-none rounded-md font-semibold"
      >
        Join Us <IoIosArrowDown className="m-1" />
      </button>

      {isOpen && (
        <ul className="absolute mt-2 py-1 bg-white rounded-md shadow-lg">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:text-rose-400"
            >
              Store Registration
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:text-rose-400"
            >
              Delivery Men Registration
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
