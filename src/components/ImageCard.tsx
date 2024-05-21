import { CardContent, Card } from "./ui/card";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function ImageCard({ src, alt, title, description }: ImageCardProps) {
  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          alt={alt}
          className="rounded-t-lg object-cover h-48 w-full"
          height="150"
          src={src}
          style={{
            aspectRatio: "300/150",
            objectFit: "cover",
          }}
          width="300"
        />
        <div className="absolute top-2 left-2 bg-[#e53e3e] bg-opacity-50 px-2 py-1 rounded-md">
          <span className="text-white font-bold">LIVE</span>
        </div>
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded-md">
          <span className="text-white font-bold">{title}</span>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
