// app/map/page.tsx
export default function MapPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl font-bold uppercase tracking-wider">Mappa</h2>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1_h7tG8bFOKd0tf7gw7Et8tmfwTdWSXqj&ehbc=2E312F"
            width="800"
            height="680"
            className="border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="border-t mt-12 pt-8 space-y-6 bg-[#f1f5f9] text-[#1e293b] p-6 rounded-lg shadow-lg">
        <p className="text-sm text-center">
          La webcam rispetta le legge italiana sulla privacy, le webcam
          turistiche non consente il riconoscimento dei tratti somatici delle
          persone, il video non viene registrato
        </p>
        <div className="flex justify-center space-x-6">
          <button className="text-[#1e293b] hover:bg-gray-200 transition-colors duration-300">
            Contattaci
          </button>
          <div className="flex space-x-4">
            <a
              className="hover:text-gray-500 transition-colors duration-300"
              href="#"
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
              href="#"
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
          </div>
        </div>
      </div>
    </div>
  );
}
