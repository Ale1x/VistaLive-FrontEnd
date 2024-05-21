"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WebcamSection } from "@/components/WebcamSection";
import { StarRating } from "@/components/StarRating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fetchWebcams } from "../services/webcamService";
import { SocialIcons } from "../SocialIcons";

interface Webcam {
  id: number;
  name: string;
  description: string;
  stream_url: string;
  image_url: string;
}

export default function HomePage() {
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
      <Header />
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <img
            alt="VISTA live logo"
            className="w-20 h-20 rounded-full"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <div className="flex space-x-4 overflow-hidden">
            <img
              alt="Town view"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              height="250"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/250",
                objectFit: "cover",
              }}
              width="400"
            />
            <img
              alt="Beach view"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              height="250"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/250",
                objectFit: "cover",
              }}
              width="400"
            />
            <Button className="self-center bg-[#1e293b] text-white hover:bg-[#334155] transition-colors duration-300 shadow-lg">
              →
            </Button>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-wider">
              Webcam Più Viste
            </h2>
            <div className="flex items-center space-x-2">
              <Badge className="bg-[#e53e3e] text-white" variant="secondary">
                Live
              </Badge>
              <p className="text-gray-500">Rating:</p>
              <StarRating />
            </div>
          </div>
          <WebcamSection webcams={webcams} />
        </div>
        <div className="border-t mt-12 pt-8 space-y-6 bg-[#f1f5f9] text-[#1e293b] p-6 rounded-lg shadow-lg">
          <p className="text-sm text-center">
            La webcam rispetta le legge italiana sulla privacy, le webcam
            turistiche non consente il riconoscimento dei tratti somatici delle
            persone, il video non viene registrato
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              className="text-[#1e293b] hover:bg-gray-200 transition-colors duration-300"
              variant="ghost"
            >
              Contattaci
            </Button>
            <SocialIcons />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
