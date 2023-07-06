import {
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";
import React from "react";

const Header: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const router = useRouter();

  const handleLogoClick: React.MouseEventHandler<HTMLDivElement> = () => {
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-gray-900 py-5 px-5 md:px-10">
      <div
        onClick={handleLogoClick}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <img src="logo-game.png" width="150px" alt="Logo" />
      </div>
      <div className="hidden items-center md:flex bg-gray-600 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-white placeholder-gray-200 hidden md:block"
          type="text"
          placeholder={"Start your search"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-purple-accent text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="hidden md:flex items-center space-x-4 justify-end text-white">
        <p className="hidden md:inline cursor-pointer text-lg">All games</p>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
