"use client";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const pathName = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  const toggleNav = () => {
    setOpen((prevOpen) => !prevOpen);
  };


  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll listener to change background color of the nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setScrollY(currentScrollY); // Trigger background change on scroll past 100px
      } else {
        setScrollY(0); // Reset background to transparent when near top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "RabbitMQ",
      children: [

        {
          name: "Services",
          path: "/rabbitmq/",
        },
        {
          name: "Support",
          path: "/support/",
        },
        {
          name: "Commercial Licensing",
          path: "/rabbitmq/licensing/",
        },
      ]
    },
    // { name: "MQ Services", path: "/mq-services/" },
    { name: "Customer Stories", path: "/stories/" },
    { name: "Blog", path: "/blogs/" },
    {
      name: "Services",
      children: [
        {
          name: "Redis",
          path: "/redis/",
        },
        {
          name: "Kafka",
          path: "/kafka/",
        },
        {
          name: "MQ Services",
          path: "/mq-services/",
        },
      ],
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrollY > 100 ? "bg-black" : "bg-transparent"
        } sm:px-[10rem] px-[3rem]`}
    >
      <div className="flex items-center py-[1.5rem] sm:py-[2.5rem] justify-between">
        <div className="sm:flex sm:items-center">
          <Link href="/" className="z-[100] relative">
            <img
              src="/ace_logo.png"
              className="w-[10rem] sm:w-[16rem] sm:mr-[1rem]"
              alt="logo"
            />
          </Link>
          <div
            className={`fixed sm:static z-20 w-[100vw] sm:w-auto h-[100vh] sm:h-auto bg-black sm:bg-transparent inset-0 sm:inset-auto px-[2rem] sm:px-0 transition-all duration-500 ease-[cubic-bezier(0.65, 0, 0.35, 1)] ${open ? "translate-x-0" : "translate-x-[100%] sm:translate-x-0"
              }`}
          >
            <ul className="mt-[10rem] sm:mt-0 sm:flex sm:items-center">
              {navItems.map((item, i) => (
                <SecondaryNavItem
                  item={item}
                  key={i}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-x-[3rem]">
          <Link href="/contact-us/">
            <button className="font-bold rounded-[.5rem] text-[1rem] sm:text-[1.3rem] sm:border text-text-100 sm:text-white bg-white sm:bg-transparent px-[1.2rem] sm:px-[2.3rem] border-[#8FD5CC] py-[.7rem]">
              Contact us
            </button>
          </Link>

          <div
            className={`overflow-hidden transition-all duration-500 ease-out flex flex-col items-center justify-between h-[1.7rem] relative z-20 sm:hidden ${open ? "w-[3rem]" : "w-[2.5rem]"
              }`}
            onClick={toggleNav}
          >
            <div
              className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? "-rotate-45 w-[2.7rem]" : ""
                }`}
            ></div>
            <div
              className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? "translate-x-[8rem] translate-y-[8rem]" : ""
                }`}
            ></div>
            <div
              className={`h-[.18rem] bg-white w-[100%] origin-right transition-all duration-500 ease-out ${open ? "rotate-45 w-[2.7rem]" : ""
                }`}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;

const Services = ({ items, hide }) => {
  const pathName = usePathname();

  return (
    <div
      className={
        `absolute border-[#8FD5CC]  shadow-sm border mt-[1.5rem] px-[1rem] py-[1rem] min-w-[15rem]  rounded-[.5rem] bg-[#040812] z-[10] ` +
        (hide ? "" : "hidden")
      }
    >
      {items.map((item, i) => (
        <Link
          href={item.path}
          key={i}
          className="py-[1rem] sm:px-[1rem] sm:ml-[.5rem] block"
        >
          <li
            className={`text-[1.5rem] text-nowrap sm:text-[1.3] w-fit ${pathName === item.path ? "border-b-[2px] border-accent-100" : ""
              } sm:font-normal font-medium`}
          >
            {item.name}
          </li>
        </Link>
      ))}
    </div>
  );
};

const SecondaryNavItem = ({ item, }) => {
  const [openServices, setOpenServices] = useState(false);
  const pathName = usePathname();
  const toggleServices = () => {
    setOpenServices((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    setOpenServices(false);
  }, [pathName]);
  return (
    <>
      {item.name === "Services" || item.name === "RabbitMQ" ? (
        <div className="w-fit h-fit relative">
          <button
            onClick={toggleServices}
            className="border-none sm:px-[1rem] px-0 py-0 font-[400] bg-transparent text-[1.5rem] sm:text-[1.3] w-fit"
          >
            {item.name}
            <ChevronDown
              size={20}
              strokeWidth={1}
              className={`inline ml-[.7rem] transition-all duration-500 ease-in-out ${openServices ? "rotate-180" : ""
                }`}
            />
          </button>
          {
            // openServices && (
            <Services
              openServices={openServices}
              setOpenServices={setOpenServices}
              items={item.children}
              hide={openServices}
            />
            // )
          }
        </div>
      ) : (
        <React.Fragment>
          <Link
            href={item.path}
            className="py-[1rem] sm:px-[1rem] sm:ml-[.5rem] block"
          >
            <li
              className={`text-[1.5rem] sm:text-[1.3] w-fit ${pathName === item.path
                ? "border-b-[2px] border-accent-100"
                : ""
                } sm:font-normal font-medium`}
            >
              {item.name}
            </li>
          </Link>
        </React.Fragment>
      )}
    </>
  )
}


