import Link from "next/link";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className="bg-[#1e293b] text-white py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <img
            alt="VISTA live logo"
            className="w-10 h-10 rounded-full"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <span className="text-lg font-bold">VISTA Live</span>
        </div>
        <NavBar />
      </div>
    </header>
  );
}
