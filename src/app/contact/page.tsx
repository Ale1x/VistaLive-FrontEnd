import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold uppercase tracking-wider mb-8 text-center">
          Contatti
        </h2>
        <p className="text-center mb-8">
          VISTA Live è un&apos;azienda leader nel fornire webcam live per le
          destinazioni turistiche. Il nostro obiettivo è di portare le
          meraviglie del mondo direttamente a casa tua, attraverso immagini live
          di alta qualità. Scopri le nostre webcam posizionate nei luoghi più
          affascinanti e vivi l&apos;esperienza come se fossi lì!
        </p>
        <p className="text-center mb-8">
          Siamo impegnati nell&apos;open source, creando software scalabile per
          migliorare l&apos;accessibilità e la qualità dei nostri servizi.
          Partecipiamo attivamente alla comunità open source, condividendo il
          nostro lavoro e collaborando con sviluppatori di tutto il mondo.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="https://www.facebook.com/vistalive.it" legacyBehavior>
            <a
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
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
              <span>Facebook</span>
            </a>
          </Link>
          <Link
            href="https://www.instagram.com/vistalive_official/"
            legacyBehavior
          >
            <a
              className="flex items-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
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
              <span>Instagram</span>
            </a>
          </Link>
          <Link href="https://github.com/passarelli.dev" legacyBehavior>
            <a
              className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300"
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
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.583 0-.288-.011-1.05-.016-2.058-3.338.726-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.758-1.333-1.758-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.805 1.305 3.492.997.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.931 0-1.31.468-2.383 1.236-3.222-.124-.303-.536-1.52.117-3.167 0 0 1.008-.322 3.3 1.23.957-.267 1.98-.4 3-.405 1.02.005 2.043.138 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.654 1.648.242 2.865.118 3.167.77.84 1.236 1.912 1.236 3.222 0 4.61-2.803 5.628-5.473 5.922.43.37.824 1.103.824 2.222 0 1.606-.015 2.898-.015 3.292 0 .322.216.698.825.58C20.565 21.798 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Github</span>
            </a>
          </Link>
          <a
            href="mailto:info@vistalive.it"
            className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
