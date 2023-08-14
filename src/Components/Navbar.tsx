import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

export default function NavbarNeo() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [log, setLog] = useState("Login");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLog("Logout");
    }
  }, []);

  const handleClick = () => {
    localStorage.clear();
    setLog("Login");
    navigate("/");
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-bgColor1">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" py-3 px-3 rounded-sm font-montserrat shadow-md"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-3 px-3 rounded-md font-montserrat shadow-md"
      >
        <a href={`/${log}`} className="flex items-center" onClick={handleClick}>
          {log}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-3 px-3 rounded-sm font-montserrat shadow-md"
      >
        <a href="/flashcards" className="flex items-center">
          Flashcards
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-3 px-3 rounded-sm font-montserrat
         shadow-md"
      >
        <a href="/quiz" className="flex items-center">
          Quiz
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-3 px-3 rounded-sm font-montserrat shadow-md"
      >
        <a href="/books" className="flex items-center">
          Books
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen py-2 px-4 lg:px-8 lg:py-4 bg-bgColor1">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 rounded-lg">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium font-montserrat"
        >
          IntelliPrep
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}
