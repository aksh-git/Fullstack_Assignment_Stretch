"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";

interface navProps {
  isLoggedIn?: boolean;
  path: string;
}

export default function MainMenu({ path }: navProps) {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const logOut = () => {
    localStorage.removeItem("auth-token");
    setisLoggedIn(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const authtoken = localStorage.getItem("auth-token");
      if (authtoken) {
        setisLoggedIn(true);
      }
    }
  }, []);

  return (
    <nav className="flex justify-between lg:items-center lg:py-4 lg:px-0">
      <Logo />
      <div className="flex flex-wrap-reverse lg:flex-nowrap w-1/2 p-2 justify-end gap-2 lg:gap-6">
        {path !== "browse" && path !== "editProfile" && (
          <a
            href="/search"
            className="px-6 p-2 border-2 border-accent font-medium text-base text-accent lg:text-black hover:bg-accent hover:text-white rounded-md"
          >
            <div className="text-3xl lg:text-base flex items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
              </svg>
              <p className="hidden lg:block">Browse students</p>
            </div>
          </a>
        )}
        {isLoggedIn ? (
          path !== "editProfile" && (
            <a
              href="/profile/edit"
              className="px-6 p-2 border-2 border-accent font-medium text-base hover:bg-accent hover:text-white rounded-md flex items-center"
            >
              Edit Profile
            </a>
          )
        ) : (
          <a
            href="/register"
            className="px-6 p-2 border-2 border-accent font-medium text-base hover:bg-accent hover:text-white rounded-md hidden lg:flex items-center"
          >
            Signup
          </a>
        )}
        {isLoggedIn ? (
          <button
            onClick={() => logOut()}
            className="px-6 p-2 border-2 border-red-600/20 font-medium text-base hover:bg-red-600 hover:text-white rounded-md flex items-center"
          >
            Log out
          </button>
        ) : (
          <a
            href="/login"
            className="px-6 p-2 border-2 border-accent font-medium text-base hover:bg-transparent bg-accent hover:text-black text-white rounded-md flex items-center"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
}
