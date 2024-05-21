"use client";

import { ImageCard } from "./ImageCard";

interface Webcam {
  id: number;
  name: string;
  description: string;
  stream_url: string;
  image_url: string;
}

interface WebcamSectionProps {
  webcams: Webcam[];
}

export function WebcamSection({ webcams }: WebcamSectionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {webcams.map((webcam) => (
        <ImageCard
          key={webcam.id}
          src={webcam.image_url}
          alt={webcam.name}
          title={webcam.name}
          description={webcam.description}
        />
      ))}
    </div>
  );
}
