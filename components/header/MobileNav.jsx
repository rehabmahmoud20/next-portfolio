import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import Socials from "./Socials";
import links from "@/utils/links";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [openMenue, setOpenMenue] = useState(false);
  const pathname = usePathname();

  const handleMenue = () => {
    setOpenMenue(!openMenue);
  };
  return (
    <nav className="md:hidden ">
      {/* open menue btn */}
      <div className="text-3xl cursor-pointer">
        <CgMenuRight onClick={handleMenue} />
      </div>
      {/* menue */}
      <div
        className={
          openMenue
            ? "bg-black/70 fixed top-0 right-0 z-20 w-full h-screen md:hidden ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            openMenue
              ? "fixed top-0 left-0 z-30 bg-white shadow-2xl  h-screen w-[75%] sm:w-[60%] md:w-[45%] p-4 ease-in duration-500"
              : "fixed top-0 left-[-100%] z-30 bg-white h-screen p-4 ease-in duration-500"
          }
        >
          {/* close icon */}
          <div className="flex justify-between items-center p-3 mb-4 ">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className=" rounded-full"
                width={40}
                height={40}
              />
            </Link>
            <div className=" text-xl p-3 cursor-pointer rounded-full shadow-lg shadow-gray-400">
              <IoMdClose onClick={handleMenue} />
            </div>
          </div>

          {/* nav */}
          <ul className=" flex flex-col text-sm gap-y-8 border-t pt-4 mb-40">
            {links.map((item) => (
              <div
                key={item.name}
                onClick={
                  handleMenue
                }              
                >
                <Link
                  href={item.path}
                  className={
                    pathname === item.path ? "active-link link" : " link"
                  }
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </ul>
          {/* socials */}
          <div className="pl-4 ">
            <p className="uppercase mb-4">lets contact</p>
            <Socials />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
