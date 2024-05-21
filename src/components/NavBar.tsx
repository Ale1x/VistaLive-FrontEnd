import Link from "next/link";

export function NavBar() {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link
            className="hover:text-gray-400 transition-colors duration-300"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-gray-400 transition-colors duration-300"
            href="/webcams"
          >
            Webcams
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-gray-400 transition-colors duration-300"
            href="/map"
          >
            Mappa
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-gray-400 transition-colors duration-300"
            href="/contact"
          >
            Contatti
          </Link>
        </li>
      </ul>
    </nav>
  );
}
