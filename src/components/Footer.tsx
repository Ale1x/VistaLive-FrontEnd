"use client";

import Link from "next/link";

const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "VISTA Live",
        url: window.location.href,
      });
      console.log("Grazie per la condivisione");
    } catch (error) {
      console.error("Errore durante la condivisione", error);
    }
  } else {
    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("URL Copiato negli appunti!");
    } catch (error) {
      console.error("Errore durante la copia", error);
    }
  }
};

export function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white py-4 mt-auto shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <p>© 2024 VISTA Live. Tutti i diritti riservati.</p>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                className="hover:text-gray-400 transition-colors duration-300"
                href="#"
              >
                Termini di servizio
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
                href="/contact"
              >
                Contattaci
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a
            className="hover:text-gray-500 transition-colors duration-300"
            href="https://www.facebook.com/vistalive.it"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            className="hover:text-gray-500 transition-colors duration-300"
            href="https://www.instagram.com/vistalive_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <button
            className="hover:text-gray-500 transition-colors duration-300 flex items-center space-x-2"
            onClick={handleShare}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="M8.59 13.51l6.83 3.98m0-10l-6.82 3.98" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
