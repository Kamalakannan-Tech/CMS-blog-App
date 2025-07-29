import { Linden_Hill } from "next/font/google";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <ul className="flex justify-end flex-row mt-4 font-medium">
        <li>
          <Link
            href="/"
            className="block py-2 pr-5 pl-5 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/create"
            className="block py-2 pr-5 pl-5 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
          >
            Create Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
