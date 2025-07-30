import { Linden_Hill } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Home, NotebookPen } from "lucide-react";

function Header() {
  return (
    <div>
      <ul className="flex justify-between my-3 mx-10 font-medium">
        <li>
          <Link
            href="/"
            className="flex justify-end bg-blue-500 block py-2 pr-5 pl-5 hover:opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <Home className="mt-1 w-4 h-4 mr-2" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/create"
            className="flex justify-end bg-blue-500 block py-2 pr-5 pl-5 hover:opacity-90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <NotebookPen className="mt-1 w-4 h-4 mr-2" />
            <span>Create Blogs</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
