import Logo from "../../public/assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { useEffect, useState } from "react";
import links from "../../utils/links";
const Header = () => {
  const pathname = usePathname();
  
  // handle shadow
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 67) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <header
      className={
        !shadow
          ? " flex justify-between items-center p-4 lg:px-12 bg-[#52c867] text-[#37533c] shadow-xl "
          : " flex justify-between items-center p-4 lg:px-12 bg-[#52c867] text-[#37533c] "
      }
    >
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
          className="w-12 rounded-full"
          width={50}
          height={50}
        />
      </Link>
      <div className="flex items-center gap-x-6">
        <nav className="hidden md:block">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={
                pathname === item.path ? "active-link link" : " link"
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
