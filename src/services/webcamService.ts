import axios from "axios";

interface Webcam {
  id: number;
  name: string;
  description: string;
  stream_url: string;
  image_url: string;
}

const API_BASE_URL = "http://localhost:8080"; // Update with your API base URL

export async function fetchWebcams(): Promise<Webcam[]> {
  const response = await axios.get(`${API_BASE_URL}/webcams`);
  return response.data;
}
