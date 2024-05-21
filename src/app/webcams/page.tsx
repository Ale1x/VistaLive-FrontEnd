// app/webcams/page.tsx
"use client";

import { useEffect, useState } from "react";
import { WebcamSection } from "@/components/WebcamSection";
import { fetchWebcams } from "@/services/webcamService";

interface Webcam {
  id: number;
  name: string;
  description: string;
  stream_url: string;
  image_url: string;
}

export default function WebcamsPage() {
  const [webcams, setWebcams] = useState<Webcam[]>([]);

  useEffect(() => {
    async function getWebcams() {
      try {
        const webcams = await fetchWebcams();
        setWebcams(webcams);
      } catch (error) {
        console.error("Failed to fetch webcams", error);
      }
    }
    getWebcams();
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl font-bold uppercase tracking-wider">
            Tutte le WEBCAM
          </h2>
          <WebcamSection webcams={webcams} />
        </div>
      </div>
    </div>
  );
}
