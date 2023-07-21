import React from "react";
import Link from "next/link";
import Image from "next/image";

import Dropdown from "./Dropdown";

import LanguageSwitcher from "./LanguageSwitcher";
const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="flex flex-col md:flex-row md:justify-start justify-center items-center my-2 shadow-md">
                    <div className="logo mx-5">
                        <Link href={"/"}>
                            <Image
                                src={"/assets/images/dhub-logo.png"}
                                alt=""
                                width={150}
                                height={80}
                            ></Image>
                        </Link>
                    </div>


                    <nav className="md:ml-96 flex flex-wrap items-center text-sm justify-center cursor-pointer">
                        <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href={"/"} className="mr-5 hover:text-gray-900">About Us</Link>
                        <Link href={"/"} className="mr-5 hover:text-gray-900">Privacy Policy</Link>
                        <Link href={"/"} className="mr-5 hover:text-gray-900">Terms & Condition</Link>
                        <Link href={"/"} className="mr-5 hover:text-gray-900">Contact Us</Link>

                    </nav>
                    <Dropdown/>
                    <LanguageSwitcher/>
    
                </div>
            </header>
        </div>
    );
};

export default Navbar;
