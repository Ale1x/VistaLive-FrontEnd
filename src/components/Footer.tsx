import Link from "next/link";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white py-4 mt-auto shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <p>© 2024 VISTA Live. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                className="hover:text-gray-400 transition-colors duration-300"
                href="#"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-400 transition-colors duration-300"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-400 transition-colors duration-300"
                href="#"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-400 transition-colors duration-300"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
